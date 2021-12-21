import Handlebars from 'handlebars/dist/handlebars.runtime';
import '../../components/sidebarLink/sidebarLink.ts';
import '../../components/avatar/avatar.ts';
import template from './profile.hbs';
import './profile.scss';

Handlebars.registerPartial('profile', template);
