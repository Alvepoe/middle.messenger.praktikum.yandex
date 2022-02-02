import template from '../../layouts/profile/profile.hbs';
import Block from '../../modules/Block';
import SidebarLink from '../../components/sidebarLink/sidebarLink';
import Avatar from '../../components/avatar/avatar';
import Form from '../../components/form/form';
import submitForm from '../../utils/submitForm';

class ChangePassword extends Block {
  render(): DocumentFragment {
    this.initChildren({
      sidebarLink: new SidebarLink(),
      avatar: new Avatar({ props: { avatarSrc: this.props.avatarSrc } }),
      form: new Form({
        props: {
          profileFields: [
            {
              type: 'password',
              label: 'Старый пароль',
              value: 'Старый пароль',
              name: 'old_password',
            },
            {
              type: 'password',
              label: 'Новый пароль',
              value: 'новый пароль',
              name: 'new_password',
            },
            {
              type: 'password',
              label: 'Повторите новый пароль ещё раз',
              value: 'новый пароль',
              name: 'new_password',
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
