import './styles/main.scss';
import Messenger from './pages/messenger/messenger';

document.addEventListener('DOMContentLoaded', () => {
  const login = new Messenger({
    props: {
      userName: 'Лёша',
    },
  });
  // @ts-ignore
  document.body.append(login.getContent());
});
