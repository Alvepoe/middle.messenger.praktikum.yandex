import '../modules/auth/auth.ts';
import Handlebars from 'handlebars/dist/handlebars.runtime';

Handlebars.registerHelper('getConfig', (context, options) => options.fn(JSON.parse(context)));
