import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './message.hbs';
import './message.scss';
import '../sidebarLink/sidebarLink.ts';

Handlebars.registerPartial('message', template);
