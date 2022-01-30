import template from '../../layouts/profile/profile.hbs';
import Block from '../../modules/Block';
import SidebarLink from '../../components/sidebarLink/sidebarLink';
import Avatar from '../../components/avatar/avatar';
import Form from '../../components/form/form';
import Link from '../../components/link/link';

class Settings extends Block {
  render(): DocumentFragment {
    this.initChildren({
      sidebarLink: new SidebarLink(),
      avatar: new Avatar({ props: { avatarSrc: this.props.avatarSrc } }),
      form: new Form({
        props: {
          profileFields: [
            {
              type: 'text',
              label: 'Почта',
              value: 'pochta@yandex.ru',
              name: 'email',
            },
            {
              type: 'text',
              label: 'Логин',
              value: 'Логин',
              name: 'login',
            },
            {
              type: 'text',
              label: 'Имя',
              value: 'Иван',
              name: 'first_name',
            },
            {
              type: 'text',
              label: 'Фамилия',
              value: 'Иванов',
              name: 'last_name',
            },
            {
              type: 'text',
              label: 'Имя в чате',
              value: 'Ванёк',
              name: 'display_name',
            },
            {
              type: 'tel',
              label: 'Телефон',
              value: '+7 (909) 967 30 30',
              name: 'phone',
            },
          ],
          buttons: [
            {
              type: 'button',
              label: 'Сохранить',
              className: 'button_centered',
            },
          ],
        },
      }),
      profileLinks: [
        new Link({
          props: {
            linkUrl: '#',
            className: 'link_mode_profile profile__list-item profile__list-item_margin',
            linkText: 'Изменить данные',
          },
        }),
        new Link({
          props: {
            linkUrl: '#',
            className: 'link_mode_profile profile__list-item profile__list-item_margin',
            linkText: 'Изменить пароль',
          },
        }),
        new Link({
          props: {
            linkUrl: '#',
            className: 'link_color_red link_mode_profile profile__list-item profile__list-item_margin',
            linkText: 'Выйти',
          },
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
