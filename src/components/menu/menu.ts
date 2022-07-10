import Block, { TEvents } from '../../modules/Block';
import MenuIcon from './components/menuIcon/menuIcon';
import MenuItem, { TMenuItemProps } from './components/menuItem/menuItem';
import template from './menu.hbs';
import './menu.scss';

type TMenuProps = {
  menuItems?: { props: TMenuItemProps; events?: TEvents }[];
  isOpen?: boolean;
};

class Menu extends Block<TMenuProps> {
  private closeMenu() {
    this.setProps({ isOpen: false });
  }

  private openMenu() {
    this.setProps({ isOpen: true });
  }

  constructor(props: TMenuProps) {
    super(props);

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  render(): DocumentFragment {
    this.initChildren({
      menuItems: this.props.menuItems?.map(({ props, events }) => {
        return new MenuItem(props, events);
      }),
      menuIcon: new MenuIcon(
        {},
        {
          click: () => {
            if (this.props.isOpen) {
              this.closeMenu();
            } else {
              this.openMenu();
            }
          },
        }
      ),
    });
    return this.compile(template, {
      isOpen: this.props.isOpen,
    });
  }
}

export default Menu;
