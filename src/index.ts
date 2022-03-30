import Router from './modules/Router';
import Messenger from './pages/messenger/messenger';
import Login from './pages/login/login';
import Registration from './pages/registration/registration';
import Settings from './pages/settings/settings';
import ChangePassword from './pages/changePassword/changePassword';
import Page404 from './pages/404/404';
import Page500 from './pages/500/500';

const router = new Router('#app');

router
  .use('/', Login)
  .use('/messenger', Messenger)
  .use('/sign-up', Registration)
  .use('/settings', Settings)
  .use('/change-password', ChangePassword)
  .use('/404', Page404)
  .use('/500', Page500)
  .start();
