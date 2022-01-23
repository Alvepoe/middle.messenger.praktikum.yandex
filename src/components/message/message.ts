import template from './message.hbs';
import './message.scss';
import Block from "../../modules/Block";

class Message extends Block {
    render(): DocumentFragment {
        return this.compile(template, {
            className: this.props.className,
            content: this.props.content,
            time: this.props.time,
        })
    }
}

export default Message;
