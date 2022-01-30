import template from './form.hbs';
import './form.scss';
import Block from '../../modules/Block';
import Field from '../field/field';
import Button from '../button/button';
import Link from '../link/link';
import ProfileField from '../profileField/profileField';

class Form extends Block {
  render(): DocumentFragment {
    this.initChildren({
      fields: this.props.fields?.map((field: object) => new Field({ props: { ...field } })),
      profileFields: this.props.profileFields?.map(
        (profileField: object) => new ProfileField({ props: { ...profileField } })
      ),
      buttons: this.props.buttons?.map((button: object) => new Button({ props: { ...button } })),
      links: this.props.links?.map((link: object) => new Link({ props: { ...link } })),
    });
    return this.compile(template, {
      legendText: this.props.legendText,
    });
  }
}

export default Form;
