import './modules/form/form'
import template from "./index.hbs";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = template({
    legendText: 'legend',
    button: {type: 'button', label: 'label'},
    fields: [{field: {
      type: "text",
      name: "name",
      label: "label",
      placeholder: "placeholder",
      error: "error",
    }}],
    link: {
      linkUrl: '#',
      linkText: 'Link'
    }
  });
});
