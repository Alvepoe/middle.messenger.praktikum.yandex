import Handlebars from 'handlebars/dist/handlebars.runtime';
import '../../components/sidebarLink/sidebarLink';
import '../../components/avatar/avatar';
import template from './profile.hbs';
import './profile.scss';

Handlebars.registerPartial('profile', template);
