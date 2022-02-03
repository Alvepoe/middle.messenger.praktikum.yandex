import template from '../../layouts/profile/profile.hbs';
import Block from '../../modules/Block';
import SidebarLink from '../../components/sidebarLink/sidebarLink';
import Avatar from '../../components/avatar/avatar';
import Form from '../../components/form/form';
import submitForm from '../../utils/submitForm';
import validateField from '../../utils/validateInput';

class ChangePassword extends Block {
  render(): DocumentFragment {
    this.initChildren({
      sidebarLink: new SidebarLink(),
      avatar: new Avatar({ props: { avatarSrc: this.props.avatarSrc } }),
      form: new Form({
        props: {
          profileFields: [
            {
              props: {
                type: 'password',
                label: 'Старый пароль',
                name: 'old_password',
              },
              events: {
                focus: validateField,
                blur: validateField,
              },
            },
            {
              props: {
                type: 'password',
                label: 'Новый пароль',
                name: 'new_password',
              },
              events: {
                focus: validateField,
                blur: validateField,
              },
            },
            {
              props: {
                type: 'password',
                label: 'Повторите новый пароль ещё раз',
                name: 'new_password',
              },
              events: {
                focus: validateField,
                blur: validateField,
              },
            },
          ],
          buttons: [
            {
              type: 'submit',
              label: 'Сохранить',
              className: 'button_centered',
            },
          ],
        },
        events: {
          submit: submitForm,
        },
      }),
    });
    return this.compile(template, {
      avatarSrc: this.props.avatarSrc,
      userFirstName: this.props.userFirstName,
    });
  }
}

export default ChangePassword;
