import Error from "./components/error/error";
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const field = new Error({
        props: {
            title: "ERROR",
            description: "SOMETHING WENT WRONG",
            linkUrl: '#',
            linkText: 'linkText'
        }
    });
    document.body.appendChild(field.getContent());
});