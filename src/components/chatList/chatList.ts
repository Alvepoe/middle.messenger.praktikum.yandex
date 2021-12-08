import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './chatList.hbs';
import '../chatPreview/chatPreview.ts';
import './chatList.scss';

Handlebars.registerPartial('chatList', template);
