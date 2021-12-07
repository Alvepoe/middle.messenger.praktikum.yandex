import Handlebars from 'handlebars/dist/handlebars.runtime';
import '../../helpers/getConfigHelper.ts';
import '../../modules/profile/profile.ts';
import template from './settings.hbs';

Handlebars.registerPartial('profileSettings', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
