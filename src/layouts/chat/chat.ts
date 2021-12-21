import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './chat.hbs';
import './chat.scss';
import '../../components/message/message.ts';

Handlebars.registerPartial('chat', template);
