import * as Handlebars from 'handlebars';
import '../../helpers/getConfigHelper.ts';
import template from './500.hbs';

Handlebars.registerPartial('error500', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
