import Handlebars from "handlebars/dist/handlebars.runtime";
import './login'
import '../../helpers/getConfigHelper'
import template from "./login.hbs";

Handlebars.registerPartial("login", template);