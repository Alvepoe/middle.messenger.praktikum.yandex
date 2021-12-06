import '../modules/auth/auth.ts';
import * as Handlebars from 'handlebars';

Handlebars.registerHelper('getConfig', (context, options) => options.fn(JSON.parse(context)));
