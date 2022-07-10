import BaseAPI from '../BaseApi';
import HTTPTransport from '../../modules/HTTPTransport';
import { IChatData } from '../types';

export default class ChatsAPI extends BaseAPI {
  private http = new HTTPTransport();

  public getChats() {
    return this.http.get('/chats');
  }

  public createChat(chatData: IChatData) {
    const body = {
      data: chatData,
    };
    return this.http.post('/chats', body);
  }
}
