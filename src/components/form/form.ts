import template from './form.hbs';
import './form.scss';
import Block, { TEvents } from '../../modules/Block';
import Field, { TFieldProps } from '../field/field';
import Button, { TButtonProps } from '../button/button';
import Link, { TLinkProps } from '../link/link';
import ProfileField, { TProfileFieldProps } from '../profileField/profileField';

type TFormProps = {
  legendText?: string;
  fields?: { props: TFieldProps; events?: TEvents }[];
  profileFields?: { props: TProfileFieldProps; events?: TEvents }[];
  links?: TLinkProps[];
  buttons?: TButtonProps[];
};

class Form extends Block<TFormProps> {
  render(): DocumentFragment {
    this.initChildren({
      fields: this.props.fields?.map(({ props, events }) => {
        return new Field(props, events, 'input');
      }),
      profileFields: this.props.profileFields?.map(
        ({ props, events }) => new ProfileField(props, events, 'input')
      ),
      buttons: this.props.buttons?.map(
        (button: TButtonProps) => new Button(button)
      ),
      links: this.props.links?.map((link: TLinkProps) => new Link({ ...link })),
    });
    return this.compile(template, <TFormProps>{
      legendText: this.props.legendText,
    });
  }
}

export default Form;
