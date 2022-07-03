import BaseAPI from '../BaseApi';
import HTTPTransport from '../../modules/HTTPTransport';

export default class ChatAPI extends BaseAPI {
  private http = new HTTPTransport();

  public getChats() {
    return this.http.get('/chats');
  }
}
