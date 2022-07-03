import './chatList.scss';
import Block from '../../modules/Block';
import template from './chatList.hbs';
import ChatPreview, { TChatPreviewProps } from '../chatPreview/chatPreview';

type TChatListProps = {
  chats?: TChatPreviewProps[];
};

class ChatList extends Block<TChatListProps> {
  render(): DocumentFragment {
    this.initChildren({
      chatPreviews: this.props.chats?.map(
        (chat: TChatPreviewProps) => new ChatPreview(chat)
      ),
    });
    return this.compile(template);
  }
}

export default ChatList;
