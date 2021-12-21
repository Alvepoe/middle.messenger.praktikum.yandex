import Handlebars from 'handlebars/dist/handlebars.runtime';
import '../../components/form/form.ts';
import '../../components/error/error.ts';
import template from './auth.hbs';

Handlebars.registerPartial('auth', template);
