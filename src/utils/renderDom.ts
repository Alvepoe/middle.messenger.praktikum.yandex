import Block from '../modules/Block';

const renderDOM = (block: Block) => {
  const root = document.querySelector('#root');
  if (root) {
    const content = <Node>block?.getContent();
    root?.replaceWith(content);
  }
};

export default renderDOM;
