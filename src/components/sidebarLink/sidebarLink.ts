import template from './sidebarLink.hbs';
import './sidebarLink.scss';
import Block from "../../modules/Block";

class SidebarLink extends Block {
    render(): DocumentFragment {
        return this.compile(template, {})
    }
}

export default SidebarLink;