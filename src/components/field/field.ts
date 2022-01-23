import template from './field.hbs';
import './field.scss';
import Block from "../../modules/Block";

class Field extends Block {
    render() {
        return this.compile(template, {
            ...this.props,
            type: this.props.type,
            name: this.props.name,
            placeholder: this.props.placeholder,
            label: this.props.label,
            id: this.id,
        });
    }
}

export default Field;

