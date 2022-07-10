import template from './chat.hbs';
import './chat.scss';
import Block from '../../modules/Block';
import Message, { TMessageProps } from '../../components/message/message';
import Menu from '../../components/menu/menu';

type TChat = {
  messages?: TMessageProps[];
  avatarSrc?: string;
  userName?: string;
};

class Chat extends Block<TChat> {
  render(): DocumentFragment {
    this.initChildren({
      messages: this.props.messages?.map(
        (message: TMessageProps) => new Message(message)
      ),
      menu: new Menu({
        menuItems: [
          {
            props: {
              itemText: 'Добавить пользователя',
              itemIconSrc: '/images/addIcon.svg',
            },
          },
        ],
      }),
    });
    return this.compile(template, {
      avatarSrc: this.props.avatarSrc,
      userName: this.props.userName,
    });
  }
}

export default Chat;
