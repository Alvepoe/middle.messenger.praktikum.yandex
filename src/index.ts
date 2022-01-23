import SidebarLink from "./components/sidebarLink/sidebarLink";
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const field = new SidebarLink({});
    document.body.appendChild(field.getContent());
});