import { TemplateDelegate } from 'handlebars';
import { v4 as uuidv4 } from 'uuid';
import EventBus from './EventBus';

interface IProps {
  [key: string | symbol]: unknown;
}

type TChildren = { [key: string]: Block | Block[] | undefined };
export type TEvents = {
  [key: string]: (event: Event) => void;
};

class Block<Props extends IProps = {}> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private readonly eventBus: EventBus;

  props: Props;

  public id: string;

  public children: TChildren | TChildren[] = {};

  events: TEvents = {};

  _meta: any = null;

  private _element: Element | null;

  /** JSDoc
   * @param {Object} props
   * @param {Object} events
   *
   * @param {string} tagName
   * @param {string} childrenTagName
   * @returns {void}
   */
  constructor(
    props?: Props,
    events = {},
    childrenTagName = '',
    tagName = 'div'
  ) {
    this.eventBus = new EventBus();
    this._meta = {
      tagName,
      childrenTagName,
      props,
    };

    this.events = events;

    this.id = uuidv4();
    if (props) {
      this.props = this._makePropsProxy({ ...props, _id: this.id });
    }
    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
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

  // ?????????? ???????????????????????????? ????????????????????????, ?????????????????????????? ??????????????
  componentDidMount(): void {}

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const isUpdated = this.componentDidUpdate(oldProps, newProps);
    if (isUpdated) this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return oldProps !== newProps;
  }

  _makePropsProxy(props: Props): Props {
    return new Proxy(props, {
      get(target, prop: keyof Props) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: keyof Props, value) {
        target[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error('?????? ????????');
      },
    });
  }

  _render() {
    this.removeEvents();
    const fragment = this.render();
    this._element = fragment.firstElementChild;
    this.addEvents();
  }

  public compile(template: TemplateDelegate, props?: Props): DocumentFragment {
    const propsAndStubs = {} as Record<string | symbol, any>;

    if (props) {
      Reflect.ownKeys(props)?.forEach(prop => {
        propsAndStubs[prop] = props[prop];
      });
    }

    const fragment = document.createElement('template');

    Object.entries(this.children).forEach(([key, child]) => {
      if (child) {
        if (Array.isArray(child)) {
          child.forEach(item => {
            propsAndStubs[key] = `${
              propsAndStubs[key] ? propsAndStubs[key] : ''
            } <div data-id="${item.id}"></div>`;
          });
        } else {
          propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
        }
      }
    });

    fragment.innerHTML = template(propsAndStubs);

    Object.values(this.children).forEach(child => {
      if (child) {
        if (Array.isArray(child)) {
          child.forEach(item => {
            const stub = fragment.content.querySelector(
              `[data-id="${item.id}"]`
            );
            stub?.replaceWith(item.getContent());
          });
        } else {
          const stub = fragment.content.querySelector(
            `[data-id="${child.id}"]`
          );
          stub?.replaceWith(child.getContent());
        }
      }
    });

    return fragment.content;
  }

  public getContent() {
    return this._element;
  }

  public initChildren(children: TChildren) {
    this.children = children;
  }

  addEvents() {
    Object.keys(this.events).forEach((eventName: string) => {
      if (this._meta.childrenTagName) {
        const firstChild = this._element?.querySelector(
          this._meta.childrenTagName
        );
        firstChild?.addEventListener(eventName, this.events[eventName]);
      } else {
        this._element?.addEventListener(eventName, this.events[eventName]);
      }
    });
  }

  removeEvents() {
    Object.keys(this.events).forEach((eventName: string) => {
      if (this._meta.childrenTagName) {
        const firstChild = this._element?.querySelector(
          this._meta.childrenTagName
        );
        firstChild?.removeEventListener(eventName, this.events[eventName]);
      } else {
        this._element?.removeEventListener(eventName, this.events[eventName]);
      }
    });
  }

  render() {
    const fragment = document.createElement('template');
    return fragment.content;
  }
}

export default Block;
