import template from './avatar.hbs';
import './avatar.scss';
import Block from '../../modules/Block';

type TAvatarProps = {
  avatarSrc?: string;
};

class Avatar extends Block<TAvatarProps> {
  render(): DocumentFragment {
    return this.compile(template, {
      avatarSrc: this.props.avatarSrc,
    });
  }
}

export default Avatar;
