import * as Handlebars from 'handlebars';
import '../../helpers/getConfigHelper.ts';
import template from './login.hbs';

Handlebars.registerPartial('login', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
