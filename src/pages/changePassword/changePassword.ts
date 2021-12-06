import * as Handlebars from 'handlebars';
import '../../helpers/getConfigHelper.ts';
import '../../modules/profile/profile.ts';
import template from './changePassword.hbs';

Handlebars.registerPartial('changePassword', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
