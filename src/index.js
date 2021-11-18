import './pages/login/login'
import template from "./index.hbs";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = template({
    config:  {
        legendText: 'Вход',
        button: {
            type: 'button',
            label: 'Авторизоваться'
        },
        fields: [
            {
                field: {
                    type: "text",
                    name: "Логин",
                    label: "Логин",
                }
            },
            {
                field: {
                    type: "password",
                    name: "Пароль",
                    label: "Пароль",
                }
            }
        ],
        link: {
          linkUrl: '#',
          linkText: 'Нет аккаунта?'
         }
    }
  });
});
