import renderDOM from '../utils/renderDOM';
import Block from './Block';

type TRouteType = {
  [key: string]: unknown;
};

type Constructable<T = any> = new (...args: any[]) => T;

export default class Route {
  _pathname: string;

  _blockClass: Constructable;

  _block: Block | null;

  _props: TRouteType;

  constructor(pathname: string, view: Constructable, props: TRouteType) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string): boolean {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      renderDOM(this._block);
    }

    this._block?.show();
  }
}
