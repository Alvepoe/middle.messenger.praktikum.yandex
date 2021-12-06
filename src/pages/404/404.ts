import Handlebars from 'handlebars/dist/handlebars.runtime';
import '../../helpers/getConfigHelper.ts';
import template from './404.hbs';

Handlebars.registerPartial('error404', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
