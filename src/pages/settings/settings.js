import Handlebars from "handlebars/dist/handlebars.runtime";
import '../../helpers/getConfigHelper'
import '../../modules/profile/profile'
import template from "./settings.hbs";

Handlebars.registerPartial("profileSettings", template);

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = template();
})