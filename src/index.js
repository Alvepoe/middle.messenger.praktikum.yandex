import './pages/login/login'
import './pages/registration/registration'
import './pages/404/404'
import './pages/500/500'
import './modules/profile/profile'
import './pages/profileSettings/profileSettings'
import './pages/changePassword/changePassword'
import './components/profileField/profileField'
import template from "./index.hbs";

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = template();
})
