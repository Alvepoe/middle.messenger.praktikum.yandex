import AuthAPI from '../api/auth/AuthAPI';
import Store from '../modules/Store/Store';
import { IUserSignInData, IUserSignUpData } from '../api/types';
import Router from '../modules/Router';

export interface ISignUpFormData extends IUserSignUpData {
  confirm_password: string;
}

export default class AuthController {
  private authApi = new AuthAPI();

  private router = new Router('');
  private store = new Store();

  private checkPasswords = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  public signIn(userData: IUserSignInData) {
    this.authApi
      .signIn(userData)
      .then(() => {
        this.authApi.getCurrentUser().then((resp: string) => {
          this.store.set({ user: JSON.parse(resp) });
          this.router.go('/messenger');
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  public signUp(userData: ISignUpFormData) {
    const { password, confirm_password, ...restData } = userData;

    const isPasswordsValid = this.checkPasswords(password, confirm_password);
    if (isPasswordsValid) {
      this.authApi
        .signUp({ password, ...restData })
        .then(() => {
          this.authApi.getCurrentUser().then((resp: string) => {
            this.store.set({ user: JSON.parse(resp) });
            this.router.go('/messenger');
          });
        })
        .catch(error => {
          alert(error);
        });
    } else {
      alert(new Error('Пароли не совпадают!'));
    }
  }
}