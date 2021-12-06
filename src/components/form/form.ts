import * as Handlebars from 'handlebars';
import '../field/field.ts';
import '../profileField/profileField.ts';
import '../button/button.ts';
import '../link/link.ts';
import template from './form.hbs';
import './form.scss';

Handlebars.registerPartial('form', template);
