import template from './link.hbs';
import './link.scss';
import Block from '../../modules/Block';

export type TLinkProps = {
  linkUrl?: string;
  className?: string;
  linkText?: string;
};

class Link extends Block<TLinkProps> {
  render(): DocumentFragment {
    return this.compile(template, {
      linkUrl: this.props.linkUrl,
      className: this.props.className,
      linkText: this.props.linkText,
    });
  }
}

export default Link;
