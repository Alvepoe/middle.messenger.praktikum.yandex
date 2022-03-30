import Block from '../modules/Block';

const renderDOM = (block: Block | null) => {
  const root = document.querySelector('#root');
  if (root) {
    const content = <Node>block?.getContent();
    root?.replaceWith(content);
  }
};

export default renderDOM;
