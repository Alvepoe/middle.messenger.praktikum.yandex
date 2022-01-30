import template from '../../components/error/error.hbs';
import Block from '../../modules/Block';
import Link from '../../components/link/link';
import '../../components/error/error.scss';

class Error500 extends Block {
  render(): DocumentFragment {
    this.initChildren({
      link: new Link({
        props: {
          linkUrl: '#',
          linkText: 'Назад к чатам',
        },
      }),
    });
    return this.compile(template, {
      title: '505',
      description: 'Мы уже фиксим',
    });
  }
}

export default Error500;
