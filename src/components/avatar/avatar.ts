import template from './avatar.hbs';
import './avatar.scss';
import Block from "../../modules/Block";

class Avatar extends Block {
    render(): DocumentFragment {
        return this.compile(template, {
            avatarSrc: this.props.avatarSrc,
        })
    }
}

export default Avatar;
