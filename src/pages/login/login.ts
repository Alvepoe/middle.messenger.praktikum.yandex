import template from '../../layouts/auth/auth.hbs';
import Block from '../../modules/Block';
import Form from '../../components/form/form';
import { handleInputValidation } from '../../utils/validateInput';
import AuthController from '../../controller/AuthController';
import { IUserSignInData } from '../../api/types';

class Login extends Block<{}> {
  private handleSubmit(event: Event) {
    const authController = new AuthController();

    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const userData: IUserSignInData = {
      login: '',
      password: '',
    };

    Array.from(formData.entries()).forEach(([key, value]: [string, string]) => {
      userData[key] = value;
    });

    return authController.signIn(userData);
  }

  render(): DocumentFragment {
    this.initChildren({
      form: new Form(
        {
          legendText: 'Вход',
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
          buttons: [
            {
              type: 'submit',
              label: 'Авторизоваться',
            },
          ],
          links: [
            {
              linkUrl: '/sign-up',
              linkText: 'Нет аккаунта?',
              className: 'link_centered',
            },
          ],
        },
        {
          submit: this.handleSubmit,
        }
      ),
    });
    return this.compile(template);
  }
}

export default Login;
