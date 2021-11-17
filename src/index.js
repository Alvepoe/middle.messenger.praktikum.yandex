import "./components/field/field";
import template from "./index.hbs";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = template({
    field: {
      type: "text",
      name: "name",
      label: "label",
      placeholder: "placeholder",
      error: "error",
    },
  });
});
