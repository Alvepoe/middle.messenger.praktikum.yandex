import './chatList.scss';
import Block from '../../modules/Block';
import template from './chatList.hbs';
import ChatPreview, { TChatPreviewProps } from '../chatPreview/chatPreview';
import Button from '../button/button';
import Modal from '../modal/modal';

type TChatListProps = {
  chats?: TChatPreviewProps[];
  handleCreateChat?: (event: Event) => void;
};

class ChatList extends Block<TChatListProps> {
  render(): DocumentFragment {
    const modal = new Modal({
      title: 'Введите название чата',
      handleFormSubmit: this.props.handleCreateChat,
      fields: [
        {
          props: {
            type: 'text',
            label: 'Название чата',
            placeholder: 'Введите название чата',
            name: 'title',
          },
        },
      ],
      buttons: [
        {
          type: 'submit',
          label: 'Создать',
        },
      ],
    });
    function openModal() {
      modal.setProps({ isOpen: true });
    }
    this.initChildren({
      createChatButton: new Button(
        {
          type: 'button',
          label: 'Создать чат',
        },
        {
          click: openModal,
        }
      ),
      chatPreviews: this.props.chats?.map(
        (chat: TChatPreviewProps) => new ChatPreview(chat)
      ),
      modal,
    });
    return this.compile(template);
  }
}

export default ChatList;
