import Handlebars from 'handlebars/dist/handlebars.runtime';
import '../../helpers/getConfigHelper.ts';
import template from './messenger.hbs';
import '../../styles/main.scss';
import './messenger.scss';
import '../../layouts/chat/chat.ts';
import '../../components/chatList/chatList.ts';

Handlebars.registerPartial('messenger', template);

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template();
});
