import { TemplateDelegate } from 'handlebars';
import { v4 as uuidv4 } from 'uuid';
import EventBus from './EventBus';

type TProps = { [key: string]: any };

type TChildren = { [key: string]: Block | Block[] };
type TEvents = { [key: string]: () => void };

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private readonly eventBus: EventBus;

  props: TProps;

  public id: string;

  public children: TChildren | TChildren[] = {};

  events: TEvents = {};

  _meta: any = null;

  private _element: Element | null;

  /** JSDoc
   * @param {string} tagName
   * @param {string} childrenTagName
   * @param {Object} props
   * @param {Object} events
   *
   * @returns {void}
   */
  constructor({ tagName = 'div', childrenTagName = '', props = {}, events = {} } = {}) {
    this.eventBus = new EventBus();
    this._meta = {
      tagName,
      childrenTagName,
      props,
    };

    this.events = events;

    this.id = uuidv4();
    this.props = this._makePropsProxy({ ...props, _id: this.id });

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

  // Может переопределять пользователь, необязательно трогать
  componentDidMount(): void {}

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: TProps, newProps: TProps): void {
    const isUpdated = this.componentDidUpdate(oldProps, newProps);
    if (isUpdated) this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: TProps, newProps: TProps): boolean {
    return oldProps !== newProps;
  }

  _makePropsProxy(props: TProps) {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        target[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error('Нет прав');
      },
    });
  }

  _render() {
    this.removeEvents();
    const fragment = this.render();
    this._element = fragment.firstElementChild;
    this.addEvents();
  }

  public compile(template: TemplateDelegate, props: TProps = {}): DocumentFragment {
    const propsAndStubs = { ...props };
    const fragment = document.createElement('template');

    Object.entries(this.children).forEach(([key, child]) => {
      if (child) {
        if (Array.isArray(child)) {
          child.forEach(item => {
            propsAndStubs[key] = `${propsAndStubs[key] ? propsAndStubs[key] : ''} <div data-id="${item.id}"></div>`;
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
            const stub = fragment.content.querySelector(`[data-id="${item.id}"]`);
            stub?.replaceWith(item.getContent());
          });
        } else {
          const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
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
        const firstChild = this._element?.querySelector(this._meta.childrenTagName);
        firstChild?.addEventListener(eventName, this.events[eventName]);
      } else {
        this._element?.addEventListener(eventName, this.events[eventName]);
      }
    });
  }

  removeEvents() {
    Object.keys(this.events).forEach((eventName: string) => {
      if (this._meta.childrenTagName) {
        const firstChild = this._element?.querySelector(this._meta.childrenTagName);
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
