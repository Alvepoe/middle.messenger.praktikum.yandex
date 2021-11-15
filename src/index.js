import template from './components/link/link.hbs'
import './components/link/link.scss'

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = template({link: {linkUrl: '#', linkText: 'Link'}})
})