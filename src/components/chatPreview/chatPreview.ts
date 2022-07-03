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
    return this.compile(template, this.props);
  }
}

export default ChatPreview;
