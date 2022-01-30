import template from '../../layouts/auth/auth.hbs';
import Block from '../../modules/Block';
import Form from '../../components/form/form';

class Registration extends Block {
  render(): DocumentFragment {
    this.initChildren({
      form: new Form({
        props: {
          legendText: 'Регистрация',
          buttons: [
            {
              type: 'button',
              label: 'Зарегистрироваться',
            },
          ],
          fields: [
            {
              type: 'text',
              label: 'Почта',
              placeholder: 'Почта',
              name: 'email',
            },
            {
              type: 'text',
              label: 'Логин',
              placeholder: 'Логин',
              name: 'login',
            },
            {
              type: 'text',
              label: 'Имя',
              placeholder: 'Имя',
              name: 'first_name',
            },
            {
              type: 'text',
              label: 'Фамилия',
              placeholder: 'Фамилия',
              name: 'last_name',
            },
            {
              type: 'tel',
              label: 'Телефон',
              placeholder: 'Телефон',
              name: 'phone',
            },
            {
              type: 'password',
              label: 'Пароль',
              placeholder: 'Пароль',
              name: 'password',
            },
            {
              type: 'password',
              label: 'Пароль (ещё раз)',
              placeholder: 'Пароль (ещё раз)',
              name: 'password',
            },
          ],
          links: [
            {
              linkUrl: '#',
              linkText: 'Войти',
              className: 'link_centered',
            },
          ],
        },
      }),
    });
    return this.compile(template);
  }
}

export default Registration;
