const emailRegExp = /\S+@\S+\.\S+/;
const loginRegExp = /[a-z-A-Z-0-9-_]{3,20}$/;
const passwordRegExp = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;
const phoneNumberRegExp = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?/;
const nameRegExp = /^([А-ЯЁ]{1}[а-яё -]{1,29})|([A-Z]{1}[a-z -]{1,29})$/u;

const INPUT_PATTERNS: { [key: string]: any } = {
  email: emailRegExp,
  login: loginRegExp,
  password: passwordRegExp,
  old_password: passwordRegExp,
  new_password: passwordRegExp,
  phone: phoneNumberRegExp,
  first_name: nameRegExp,
  second_name: nameRegExp,
  last_name: nameRegExp,
};

const ERROR_MESSAGES: { [key: string]: string } = {
  email: 'Неверный формат электронной почты',
  login: 'Неверный логин',
  password: 'Неверный пароль',
  old_password: 'Неверный пароль',
  new_password: 'Неверный пароль',
  phone: 'Неверный формат сотового номера',
  first_name: 'Неверное имя',
  second_name: 'Неверная фамилия',
  last_name: 'Неверная фамилия',
};

export const isValueValid = (name: string, value: string) => {
  return INPUT_PATTERNS[name]?.test(value);
};

const disableButton = (button: HTMLButtonElement | null) => {
  button?.setAttribute('disabled', 'disabled');
};

const showError = (error: HTMLElement, inputName: string) => {
  error.innerText = `${ERROR_MESSAGES[inputName]}`;
  error.style.display = 'block';
};

const hideError = (error: HTMLElement) => {
  error.style.display = 'none';
};

const enableButton = (button: HTMLButtonElement | null) => {
  button?.removeAttribute('disabled');
};

export const validateField = (input: HTMLInputElement) => {
  const { name, value } = input;
  const isValid = isValueValid(name, value);
  const errorElement =
    input?.parentElement?.querySelector<HTMLElement>('.field__error');
  const buttonElement = document.querySelector<HTMLButtonElement>(
    'button[type="submit"]'
  );
  if (errorElement) {
    if (!isValid) {
      showError(errorElement, name);
      disableButton(buttonElement);
    } else {
      hideError(errorElement);
      enableButton(buttonElement);
    }
  }
  return isValid;
};

export const handleInputValidation = (event: { target: HTMLInputElement }) => {
  return validateField(event.target);
};
