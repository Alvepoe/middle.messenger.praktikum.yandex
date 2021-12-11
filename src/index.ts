import template from './pages/messenger/messenger.hbs';
import './pages/messenger/messenger.ts';

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = template({
    chats: [
      {
        chatTitle: 'chatTitle', lastMessageTime: '2020-01-02T14:22:22.000Z', content: 'ща аннек расскажу обоссышься', unreadCount: 15,
      }, {
        chatTitle: 'chatTitle', lastMessageTime: '2020-01-02T14:22:22.000Z', content: 'ща аннек расскажу обоссышься', unreadCount: 15,
      }, {
        chatTitle: 'chatTitle', lastMessageTime: '2020-01-02T14:22:22.000Z', content: 'ща аннек расскажу обоссышься', unreadCount: 15,
      }, {
        chatTitle: 'chatTitle', lastMessageTime: '2020-01-02T14:22:22.000Z', content: 'ща аннек расскажу обоссышься', unreadCount: 15,
      }, {
        chatTitle: 'chatTitle', lastMessageTime: '2020-01-02T14:22:22.000Z', content: 'ща аннек расскажу обоссышься', unreadCount: 15,
      }, {
        chatTitle: 'chatTitle', lastMessageTime: '2020-01-02T14:22:22.000Z', content: 'ща аннек расскажу обоссышься', unreadCount: 15,
      },
    ],
  });
});
