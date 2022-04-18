export interface IUserSignUpData {
  [k: string]: string;
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}

export interface IUserSignInData {
  [k: string]: string;
  login: string;
  password: string;
}
