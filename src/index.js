import './pages/login/login'
import './pages/registration/registration'
import template from "./index.hbs";

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = template();
})
