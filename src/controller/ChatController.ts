import ChatAPI from '../api/chat/ChatApi';
import Store from '../modules/Store/Store';

export default class AuthController {
  private chatApi = new ChatAPI();

  private store = new Store();

  public getChatsList() {
    this.chatApi
      .getChats()
      .then((response: string) => {
        const chats = JSON.parse(response).map(chat => {
          return {
            chatTitle: chat.title,
            lastMessageTime: chat.lastMessage?.time,
            content: chat.lastMessage?.content,
            unreadCount: chat.unread_count,
          };
        });
        this.store.set({
          chats,
        });
      })
      .catch(error => {
        alert(error);
      });
  }
}
