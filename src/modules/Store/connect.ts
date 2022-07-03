import Block from '../Block';
import Store, { STORE_EVENTS } from '../Store/Store';

export function connect(
  mapStateToProps: (state: Record<string, any>) => Record<string, any>
) {
  return function (Component: typeof Block) {
    const store = new Store();

    return class ClassComponent extends Component {
      constructor(props: Record<string, unknown> | undefined) {
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(STORE_EVENTS.UPDATE, () => {
          const newState = mapStateToProps(store.getState());
          this.setProps({ ...newState });

          state = newState;
        });
      }
    };
  };
}
