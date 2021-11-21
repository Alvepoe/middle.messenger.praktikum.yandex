import Handlebars from "handlebars/dist/handlebars.runtime";
import './registration'
import '../../helpers/getConfigHelper'
import template from "./registration.hbs";

Handlebars.registerPartial("registration", template);

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = template();
})