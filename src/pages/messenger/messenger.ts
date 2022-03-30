import '../../styles/main.scss';
import './messenger.scss';
import Block from '../../modules/Block';
import ChatList from '../../components/chatList/chatList';
import template from './messenger.hbs';
import Chat from '../../layouts/chat/chat';
import submitForm from '../../utils/submitForm';

type TMessengerProps = {
  avatarSrc?: string;
  userName: string;
};

class Messenger extends Block<TMessengerProps> {
  render(): DocumentFragment {
    this.initChildren({
      chatList: new ChatList({
        chats: [
          {
            chatTitle: 'chatTitle',
            lastMessageTime: '2020-01-02T14:22:22.000Z',
            content: 'ща аннек расскажу',
            unreadCount: 15,
          },
          {
            chatTitle: 'chatTitle',
            lastMessageTime: '2020-01-02T14:22:22.000Z',
            content: 'ща аннек расскажу',
            unreadCount: 15,
          },
          {
            chatTitle: 'chatTitle',
            lastMessageTime: '2020-01-02T14:22:22.000Z',
            content: 'ща аннек расскажу',
            unreadCount: 15,
          },
          {
            chatTitle: 'chatTitle',
            lastMessageTime: '2020-01-02T14:22:22.000Z',
            content: 'ща аннек расскажу',
            unreadCount: 15,
          },
          {
            chatTitle: 'chatTitle',
            lastMessageTime: '2020-01-02T14:22:22.000Z',
            content: 'ща аннек расскажу',
            unreadCount: 15,
          },
        ],
      }),
      chat: new Chat(
        {
          messages: [
            {
              content:
                'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
              time: '23:40',
              className: 'companion',
            },
            {
              content: 'Круто!',
              time: '23:41',
              className: 'user',
            },
          ],
          userName: 'Леша',
        },
        {
          submit: submitForm,
        }
      ),
    });
    return this.compile(template);
  }
}

export default Messenger;
