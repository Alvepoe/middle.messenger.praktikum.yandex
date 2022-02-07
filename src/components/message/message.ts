import template from './message.hbs';
import './message.scss';
import Block from '../../modules/Block';

type TMessageProps = {
  className?: string;
  content: string;
  time: string;
};

class Message extends Block<TMessageProps> {
  render(): DocumentFragment {
    return this.compile(template, {
      className: this.props.className,
      content: this.props.content,
      time: this.props.time,
    });
  }
}

export default Message;
