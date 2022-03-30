import Route from './Route';

type Constructor<T> = new (...args: any[]) => T;

class Router {
  static __instance: Router | null;

  routes: Route[];

  history: History;

  _currentRoute: Route | null;

  _rootQuery: string | null;

  constructor(_rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = _rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Constructor<any>) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  start() {
    // Реагируем на изменения в адресной строке и вызываем перерисовку
    window.onpopstate = event => {
      this._onRoute((event.currentTarget as Window)?.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      window.location.assign('/404');
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}

export default Router;
