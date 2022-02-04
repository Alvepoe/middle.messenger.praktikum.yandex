import template from '../../layouts/auth/auth.hbs';
import Block from '../../modules/Block';
import Form from '../../components/form/form';
import submitForm from '../../utils/submitForm';
import { handleInputValidation } from '../../utils/validateInput';
import renderDOM from '../../utils/renderDom';

class Registration extends Block {
  render(): DocumentFragment {
    this.initChildren({
      form: new Form({
        props: {
          legendText: 'Регистрация',
          buttons: [
            {
              type: 'submit',
              label: 'Зарегистрироваться',
            },
          ],
          fields: [
            {
              props: {
                type: 'text',
                label: 'Почта',
                placeholder: 'Почта',
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
                type: 'text',
                label: 'Имя',
                placeholder: 'Имя',
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
                placeholder: 'Фамилия',
                name: 'last_name',
              },
              events: {
                focus: handleInputValidation,
                blur: handleInputValidation,
              },
            },
            {
              props: {
                type: 'tel',
                label: 'Телефон',
                placeholder: 'Телефон',
                name: 'phone',
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
            {
              props: {
                type: 'password',
                label: 'Пароль (ещё раз)',
                placeholder: 'Пароль (ещё раз)',
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
              linkText: 'Войти',
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

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Registration());
});

export default Registration;
