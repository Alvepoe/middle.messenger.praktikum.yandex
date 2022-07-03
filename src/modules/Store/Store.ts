import EventBus from '../EventBus';

export enum STORE_EVENTS {
  UPDATE = 'store:updated',
}

class Store extends EventBus {
  static __instance: Store | null;

  public state: Record<string, any>;

  constructor() {
    super();

    if (Store.__instance) {
      return Store.__instance;
    }

    this.state = {};

    Store.__instance = this;
  }

  public getState() {
    return this.state;
  }

  public set(nextState: Partial<Record<string, any>>) {
    this.state = { ...this.state, ...nextState };

    this.emit(STORE_EVENTS.UPDATE);
  }
}

export default Store;
