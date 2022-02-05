import template from './button.hbs';
import './button.scss';
import Block from '../../modules/Block';

export type TButtonProps = {
  type?: string;
  className?: string;
  label?: string;
};

class Button extends Block<TButtonProps> {
  render(): DocumentFragment {
    return this.compile(template, {
      type: this.props.type || 'button',
      label: this.props.label,
      className: this.props.className,
    });
  }
}

export default Button;
