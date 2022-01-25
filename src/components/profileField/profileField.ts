import template from './profileField.hbs';
import './profileField.scss';
import '../../layouts/profile/profile.scss';
import Block from "../../modules/Block";

class ProfileField extends Block {
    render() {
        return this.compile(template, {
            ...this.props,
            type: this.props.type,
            name: this.props.name,
            label: this.props.label,
            id: this.id,
        });
    }
}

export default ProfileField;
