import template from './profileField.hbs';
import './profileField.scss';
import '../../layouts/profile/profile.scss';
import Block from '../../modules/Block';

export type TProfileFieldProps = {
  type?: string;
  name: string;
  label: string;
};

class ProfileField extends Block<TProfileFieldProps> {
  render() {
    return this.compile(template, {
      type: this.props.type,
      name: this.props.name,
      label: this.props.label,
    });
  }
}

export default ProfileField;
