import template from './modal.hbs';
import './modal.scss';
import Block, { TEvents } from '../../modules/Block';
import { TFieldProps } from '../field/field';
import Form from '../form/form';
import { TButtonProps } from '../button/button';
import CloseButton from '../closeButton/closeButton';

export type TModalProps = {
  title: string;
  fields?: { props: TFieldProps; events?: TEvents }[];
  buttons?: TButtonProps[];
  isOpen?: boolean;
  handleFormSubmit?: (event: Event) => void;
};

class Modal extends Block<TModalProps> {
  private closeModal() {
    this.setProps({ isOpen: false });
  }

  constructor(props: TModalProps) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  render(): DocumentFragment {
    this.initChildren({
      form: new Form(
        {
          fields: this.props.fields,
          buttons: this.props.buttons,
        },
        {
          submit: this.props.handleFormSubmit,
        }
      ),
      closeButton: new CloseButton(
        {},
        {
          click: this.closeModal,
        }
      ),
    });
    return this.compile(template, {
      title: this.props.title,
      isOpen: this.props.isOpen,
    });
  }
}

export default Modal;
