const form = document.getElementById('form');
const errorMsg = document.querySelector('.error-msg');
const msg = 'Please enter a valid email address (ALL in LOWER case)';

form.addEventListener('submit', (e) => {
  if (form.elements.name.value !== '') {
    if (String(form.elements.em.value) !== String(form.elements.em.value).toLowerCase()) {
      errorMsg.innerHTML = msg;
      e.preventDefault();
    } else {
      localStorage.removeItem('data');
      errorMsg.innerHTML = '';
      return true;
    }
  }
  return false;
});

form.addEventListener('input', () => {
  const contactData = {
    name: form.elements.name.value,
    email: form.elements.em.value,
    message: form.elements.message.value,
  };

  const jsonData = JSON.stringify(contactData);
  localStorage.setItem('data', jsonData);
});

window.onload = () => {
  if (localStorage.getItem('data')) {
    const data = JSON.parse(localStorage.getItem('data'));
    form.elements.name.value = data.name;
    form.elements.em.value = data.email;
    form.elements.message.value = data.message;
  } else {
    form.elements.name.value = '';
    form.elements.em.value = '';
    form.elements.message.value = '';
  }
};