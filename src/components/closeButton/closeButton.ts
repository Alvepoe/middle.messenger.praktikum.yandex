import template from './closeButton.hbs';
import './closeButton.scss';
import Block from '../../modules/Block';

class CloseButton extends Block<{}> {
  render(): DocumentFragment {
    return this.compile(template);
  }
}

export default CloseButton;
