import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './chat.hbs';
import './chat.scss';
import '../message/message.ts';

Handlebars.registerPartial('chat', template);
