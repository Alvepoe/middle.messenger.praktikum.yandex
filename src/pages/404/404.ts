import template from '../../components/error/error.hbs';
import Block from '../../modules/Block';
import Link from '../../components/link/link';
import '../../components/error/error.scss';
import renderDOM from '../../utils/renderDom';

class Error404 extends Block {
  render(): DocumentFragment {
    this.initChildren({
      link: new Link({
        props: {
          linkUrl: '#',
          linkText: 'Войти',
        },
      }),
    });
    return this.compile(template, {
      title: '404',
      description: 'Не туда попали',
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Error404());
});

export default Error404;
