import template from './menuIcon.hbs';
import './menuIcon.scss';
import Block from '../../../../modules/Block';

class MenuIcon extends Block<{}> {
  render(): DocumentFragment {
    return this.compile(template);
  }
}

export default MenuIcon;
