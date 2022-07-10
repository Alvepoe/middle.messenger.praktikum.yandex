import template from './menuItem.hbs';
import './menuItem.scss';
import Block from '../../../../modules/Block';

export type TMenuItemProps = {
  itemText: string;
  itemIconSrc?: string;
};

class MenuItem extends Block<TMenuItemProps> {
  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default MenuItem;
