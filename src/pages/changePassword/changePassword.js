import Handlebars from 'handlebars/dist/handlebars.runtime';
import '../../helpers/getConfigHelper';
import '../../modules/profile/profile';
import template from './changePassword.hbs';

Handlebars.registerPartial('changePassword', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
