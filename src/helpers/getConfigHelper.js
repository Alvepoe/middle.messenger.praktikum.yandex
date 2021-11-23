import '../modules/auth/auth'
import Handlebars from "handlebars/dist/handlebars.runtime";

Handlebars.registerHelper('getConfig', function(context, options) {
    return options.fn(JSON.parse(context));
});