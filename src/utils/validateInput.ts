const emailRegExp = /\S+@\S+\.\S+/;
const loginRegExp = /[a-z-A-Z-0-9-_]{3,20}$/;
const passwordRegExp = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;
const phoneNumberRegExp = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?/;
const nameRegExp = /^([А-ЯЁ]{1}[а-яё -]{1,29})|([A-Z]{1}[a-z -]{1,29})$/u;

const INPUT_PATTERNS: { [key: string]: any } = {
  email: emailRegExp,
  login: loginRegExp,
  password: passwordRegExp,
  phone: phoneNumberRegExp,
  first_name: nameRegExp,
  second_name: nameRegExp,
};

const isValueValid = (name: string, value: string) => {
  return INPUT_PATTERNS[name]?.test(value);
};

function validateField(event: { target: HTMLInputElement }) {
  const input = event.target;
  const { name, value } = input;
  const isValid = isValueValid(name, value);

  if (!isValid) {
    console.log(`error - ${name}`);
  }
}

export default validateField;
