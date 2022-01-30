import template from '../../layouts/auth/auth.hbs';
import Block from '../../modules/Block';
import Form from '../../components/form/form';

class Login extends Block {
  render(): DocumentFragment {
    this.initChildren({
      form: new Form({
        props: {
          legendText: 'Вход',
          buttons: [
            {
              type: 'button',
              label: 'Авторизоваться',
            },
          ],
          fields: [
            {
              type: 'text',
              label: 'Логин',
              placeholder: 'Логин',
              name: 'login',
            },
            {
              type: 'password',
              label: 'Пароль',
              placeholder: 'Пароль',
              name: 'password',
            },
          ],
          links: [
            {
              linkUrl: '#',
              linkText: 'Нет аккаунта?',
              className: 'link_centered',
            },
          ],
        },
      }),
    });
    return this.compile(template);
  }
}

export default Login;
