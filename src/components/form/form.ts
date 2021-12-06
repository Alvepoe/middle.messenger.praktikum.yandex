import Handlebars from 'handlebars/dist/handlebars.runtime';
import '../field/field.ts';
import '../profileField/profileField.ts';
import '../button/button.ts';
import '../link/link.ts';
import template from './form.hbs';
import './form.scss';

Handlebars.registerPartial('form', template);
