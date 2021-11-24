import Handlebars from 'handlebars/dist/handlebars.runtime';
import '../../helpers/getConfigHelper';
import template from './500.hbs';

Handlebars.registerPartial('error500', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
