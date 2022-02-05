import template from './field.hbs';
import './field.scss';
import Block from '../../modules/Block';

export type TFieldProps = {
  type?: string;
  name?: string;
  placeholder?: string;
  label?: string;
};

class Field extends Block<TFieldProps> {
  render() {
    return this.compile(template, {
      type: this.props.type,
      name: this.props.name,
      placeholder: this.props.placeholder,
      label: this.props.label,
    });
  }
}

export default Field;
