import * as Handlebars from 'handlebars';
import '../../helpers/getConfigHelper.ts';
import template from './404.hbs';

Handlebars.registerPartial('error404', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
