import { validateField } from './validateInput';

function submitForm(event: Event) {
  event.preventDefault();
  const form = document.querySelector('form');
  if (form) {
    const inputs = Array.from(form.elements).filter(
      ({ nodeName }) => nodeName === 'INPUT'
    );
    inputs.forEach((input: HTMLInputElement) => validateField(input));
    const formEntries = new FormData(form).entries();
    let serializedForm = {};
    Array.from(formEntries).forEach(([name, value]) => {
      serializedForm = { ...serializedForm, [name]: value };
    });
    console.log(serializedForm);
  }
}

export default submitForm;
