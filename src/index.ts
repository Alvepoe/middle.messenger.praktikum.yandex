import Router from './modules/Router';
import Messenger from './pages/messenger/messenger';

const router = new Router('#app');

router.use('/chats', Messenger).start();
