function submitForm(event: Event) {
  event.preventDefault();
  const form = document.querySelector('form');
  if (form) {
    const formEntries = new FormData(form).entries();
    let serializedForm = {};
    Array.from(formEntries).forEach(([name, value]) => {
      serializedForm = { ...serializedForm, [name]: value };
    });
    console.log(serializedForm);
  }
}

export default submitForm;
