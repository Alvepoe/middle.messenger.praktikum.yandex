import template from './chatPreview.hbs';
import './chatPreview.scss';
import Block from '../../modules/Block';

export type TChatPreviewProps = {
  userAvatarSrc?: string;
  chatTitle: string;
  lastMessageTime: string;
  content: string;
  unreadCount?: number;
};

class ChatPreview extends Block<TChatPreviewProps> {
  render(): DocumentFragment {
    return this.compile(template, {
      userAvatarSrc: this.props.userAvatarSrc,
      chatTitle: this.props.chatTitle,
      lastMessageTime: this.props.lastMessageTime,
      content: this.props.content,
      unreadCount: this.props.unreadCount,
    });
  }
}

export default ChatPreview;
