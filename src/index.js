import './pages/login/login'
import './pages/registration/registration'
import './pages/404/404'
import './pages/505/505'
import template from "./index.hbs";

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = template();
})
