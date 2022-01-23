import { TemplateDelegate } from 'handlebars';
import { v4 as uuidv4 } from 'uuid';
import EventBus from './EventBus';

type Props = { [key: string]: any };

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private readonly eventBus: EventBus;

  props: Props;

  public id: string;

  public children: Block | Block[] = [];

  _element: Element | HTMLElement | DocumentFragment;

  _meta: any = null;

  /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
  constructor({ tagName = 'div', props = {}}) {
    this.eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy({ ...props, __id: this.id });

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
    this.id = uuidv4();
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount(): void{}

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const isUpdated = this.componentDidUpdate(oldProps, newProps);
    if(isUpdated) this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return oldProps !== newProps;
  }

  _makePropsProxy(props: Props) {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        target[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error("Нет прав");
      },
    });
  }

  _render() {
    const block = this.render();

    this._element.appendChild(block);
  }

  public compile(template: TemplateDelegate, props?: Props): DocumentFragment {
    const propsAndStubs = { ...props };

    const fragment = document.createElement('template');

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`
    });

    fragment.innerHTML = template(propsAndStubs);

    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

      stub?.replaceWith(child.getContent());
    });

    return fragment.content;
  }

  public getContent() {
    return this._element;
  }


  render() {
    const fragment = document.createElement('template');
    return fragment.content;
  }

}

export default Block;
