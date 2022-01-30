import template from './link.hbs';
import './link.scss';
import Block from '../../modules/Block';

class Link extends Block {
  render(): DocumentFragment {
    return this.compile(template, {
      linUrl: this.props.linUrl,
      className: this.props.className,
      linkText: this.props.linkText,
    });
  }
}

export default Link;
