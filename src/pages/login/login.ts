import template from '../../layouts/auth/auth.hbs';
import Block from '../../modules/Block';
import Form from '../../components/form/form';
import submitForm from '../../utils/submitForm';
import { handleInputValidation } from '../../utils/validateInput';

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
              props: {
                type: 'text',
                label: 'Логин',
                placeholder: 'Логин',
                name: 'login',
              },
              events: {
                focus: handleInputValidation,
                blur: handleInputValidation,
              },
            },
            {
              props: {
                type: 'password',
                label: 'Пароль',
                placeholder: 'Пароль',
                name: 'password',
              },
              events: {
                focus: handleInputValidation,
                blur: handleInputValidation,
              },
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
