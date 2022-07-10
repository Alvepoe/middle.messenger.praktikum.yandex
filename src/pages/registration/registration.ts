import template from '../../layouts/auth/auth.hbs';
import Block from '../../modules/Block';
import Form from '../../components/form/form';
import AuthController, {
  ISignUpFormData,
} from '../../controller/AuthController';
import { handleInputValidation } from '../../utils/validateInput';
import { connect } from '../../modules/Store/connect';

class Registration extends Block {
  private handleSubmit(event: Event) {
    const authController = new AuthController();

    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const userData: ISignUpFormData = {
      email: '',
      login: '',
      first_name: '',
      second_name: '',
      phone: '',
      password: '',
      confirm_password: '',
    };

    Array.from(formData.entries()).forEach(([key, value]: [string, string]) => {
      userData[key] = value;
    });

    return authController.signUp(userData);
  }

  render(): DocumentFragment {
    this.initChildren({
      form: new Form(
        {
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
                name: 'second_name',
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
                name: 'confirm_password',
              },
              events: {
                focus: handleInputValidation,
                blur: handleInputValidation,
              },
            },
          ],
          links: [
            {
              linkUrl: '/',
              linkText: 'Войти',
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

export default connect(state => ({ chats: state.chats }))(
  Registration as typeof Block
);
