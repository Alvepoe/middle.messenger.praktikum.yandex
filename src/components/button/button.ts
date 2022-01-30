import template from './button.hbs';
import './button.scss';
import Block from '../../modules/Block';

class Button extends Block {
  render() {
    return this.compile(template, {
      ...this.props,
      type: this.props.type || 'button',
      label: this.props.label,
      id: this.id,
    });
  }
}

export default Button;
