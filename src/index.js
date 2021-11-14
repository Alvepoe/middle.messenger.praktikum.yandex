import template from './components/field/field.hbs'
import './components/field/field.scss'

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = template({field: {type: 'text', name: 'name', label: 'label', placeholder: 'placeholder'}})
})