import BaseAPI from '../BaseApi';
import HTTPTransport from '../../modules/HTTPTransport';
import { IUserSignInData, IUserSignUpData } from '../types';

export default class Auth extends BaseAPI {
  private http = new HTTPTransport();

  public signUp(data: IUserSignUpData) {
    const body = {
      data,
    };

    return this.http.post('/auth/signup', body);
  }

  public signIn(data: IUserSignInData) {
    const body = {
      data,
    };

    return this.http.post('/auth/signin', body);
  }

  public getCurrentUser() {
    return this.http.get('/auth/user');
  }

  public logOut() {
    return this.http.post('/auth/logout');
  }
}
