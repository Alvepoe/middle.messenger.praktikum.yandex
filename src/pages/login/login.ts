import template from '../../layouts/auth/auth.hbs';
import Block from '../../modules/Block';
import Form from '../../components/form/form';
import submitForm from '../../utils/submitForm';

class Login extends Block {
  render(): DocumentFragment {
    this.initChildren({
      form: new Form({
        props: {
          legendText: 'Вход',
          buttons: [
            {
              type: 'submit',
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
        events: {
          submit: submitForm,
        },
      }),
    });
    return this.compile(template);
  }
}

export default Login;
