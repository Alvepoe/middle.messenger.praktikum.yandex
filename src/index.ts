import Button from "./components/button/button";


document.addEventListener('DOMContentLoaded', () => {
    const button = new Button(undefined,{
            type: 'button',
            label: 'qqq'
    })
    document.body.appendChild(button.getContent());
});