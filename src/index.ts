import './styles/main.scss';
import Login from './pages/login/login';
import Error404 from './pages/404/404';
import Registration from './pages/registration/registration';
import Messenger from './pages/messenger/messenger';
import Settings from './pages/settings/settings';
import ChangePassword from './pages/changePassword/changePassword';
import Error500 from './pages/500/500';

document.addEventListener('DOMContentLoaded', () => {
  let content;
  const root = document.querySelector('#root');

  const pathName = window.location.pathname;

  switch (pathName) {
    case '/login':
      content = new Login();
      break;
    case '/signIn':
      content = new Registration();
      break;
    case '/chat':
      content = new Messenger({
        props: {
          userName: 'Лёша',
        },
      });
      break;
    case '/settings':
      content = new Settings({
        props: {
          userFirstName: 'Лёша',
        },
      });
      break;
    case '/changePassword':
      content = new ChangePassword({
        props: {
          userFirstName: 'Лёша',
        },
      });
      break;
    case '/500':
      content = new Error500();
      break;
    case '/404':
      content = new Error404();
      break;
    default:
      return;
  }

  const contentElement = content?.getContent();

  if (contentElement) {
    // @ts-ignore
    root?.replaceWith(contentElement);
  }
});
