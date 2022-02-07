import template from './chat.hbs';
import './chat.scss';
import Block from '../../modules/Block';
import Message from '../../components/message/message';

class Chat extends Block {
  render(): DocumentFragment {
    this.initChildren({
      messages: this.props.messages?.map((message: object) => new Message({ props: { ...message } })),
    });
    return this.compile(template, { avatarSrc: this.props.avatarSrc, userName: this.props.userName });
  }
}

export default Chat;
