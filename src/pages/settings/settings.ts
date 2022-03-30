import template from '../../layouts/profile/profile.hbs';
import Block from '../../modules/Block';
import SidebarLink from '../../components/sidebarLink/sidebarLink';
import Avatar from '../../components/avatar/avatar';
import Form from '../../components/form/form';
import Link from '../../components/link/link';
import submitForm from '../../utils/submitForm';
import { handleInputValidation } from '../../utils/validateInput';

type TSettingsProps = {
  avatarSrc?: string;
  userFirstName: string;
};

class Settings extends Block<TSettingsProps> {
  render(): DocumentFragment {
    this.initChildren({
      sidebarLink: new SidebarLink(),
      avatar: new Avatar({ avatarSrc: this.props.avatarSrc }),
      form: new Form(
        {
          profileFields: [
            {
              props: {
                type: 'text',
                label: 'Почта',
                name: 'email',
              },
              events: {
                focus: handleInputValidation,
                blur: handleInputValidation,
              },
            },
            {
              props: {
                type: 'text',
                label: 'Логин',
                name: 'login',
              },
              events: {
                focus: handleInputValidation,
                blur: handleInputValidation,
              },
            },
            {
              props: {
                type: 'text',
                label: 'Имя',
                name: 'first_name',
              },
              events: {
                focus: handleInputValidation,
                blur: handleInputValidation,
              },
            },
            {
              props: {
                type: 'text',
                label: 'Фамилия',
                name: 'last_name',
              },
              events: {
                focus: handleInputValidation,
                blur: handleInputValidation,
              },
            },
            {
              props: {
                type: 'text',
                label: 'Имя в чате',
                name: 'display_name',
              },
            },
            {
              props: {
                type: 'tel',
                label: 'Телефон',
                name: 'phone',
              },
              events: {
                focus: handleInputValidation,
                blur: handleInputValidation,
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
        {
          submit: submitForm,
        }
      ),
      profileLinks: [
        new Link({
          linkUrl: '#',
          className:
            'link_mode_profile profile__list-item profile__list-item_margin',
          linkText: 'Изменить данные',
        }),
        new Link({
          linkUrl: '#',
          className:
            'link_mode_profile profile__list-item profile__list-item_margin',
          linkText: 'Изменить пароль',
        }),
        new Link({
          linkUrl: '#',
          className:
            'link_color_red link_mode_profile profile__list-item profile__list-item_margin',
          linkText: 'Выйти',
        }),
      ],
    });
    return this.compile(template, {
      avatarSrc: this.props.avatarSrc,
      userFirstName: this.props.userFirstName,
    });
  }
}

export default Settings;
