import './chatList.scss';
import Block from '../../modules/Block';
import template from './chatList.hbs';
import ChatPreview from '../chatPreview/chatPreview';

class ChatList extends Block {
  render(): DocumentFragment {
    this.initChildren({
      chatPreviews: this.props.chats.map(
        (chat: {}) =>
          new ChatPreview({
            props: {
              ...chat,
            },
          })
      ),
    });
    return this.compile(template);
  }
}

export default ChatList;
