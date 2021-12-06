import * as Handlebars from 'handlebars';
import '../../helpers/getConfigHelper.ts';
import template from './registration.hbs';

Handlebars.registerPartial('registration', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
