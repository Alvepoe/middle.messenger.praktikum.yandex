import Handlebars from "handlebars/dist/handlebars.runtime";
import '../../helpers/getConfigHelper'
import template from "./profileSettings.hbs";

Handlebars.registerPartial("profileSettings", template);