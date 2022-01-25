import './styles/main.scss';
import Form from "./components/form/form";

document.addEventListener('DOMContentLoaded', () => {
    const field = new Form({
        props: {
            profileFields: [{
                type: 'password',
                name: 'password',
                placeholder: 'password',
                label: 'password'
            },
                {
                    type: 'password',
                    name: 'password',
                    placeholder: 'password',
                    label: 'password'
                }],
            buttons: [{
                label: 'button',
                className: 'button_centered',
            }],
            links: [{
                linkText: 'link',
                className: 'link_centered',
            }],
            legendText: 'legendText'
        }
    });
    document.body.appendChild(field.getContent());
});