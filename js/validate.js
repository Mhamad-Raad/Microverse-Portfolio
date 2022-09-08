const form = document.getElementById('form');
const errorMsg = document.querySelector('.error-msg');
const msg = 'Please enter a valid email address (ALL in LOWER case)';

form.addEventListener('submit', (e) => {
  if (form.elements.name.value !== '') {
    if (String(form.elements.em.value) !== String(form.elements.em.value).toLowerCase()) {
      errorMsg.innerHTML = msg;
      e.preventDefault();
    } else {
      errorMsg.innerHTML = '';
      return true;
    }
  }
  return false;
});

form.addEventListener('input', () => {
  let contactData = {name: form.elements.name.value, email: form.elements.em.value, message: form.elements.message.value};
  var jsonData = JSON.stringify(contactData);
  localStorage.setItem('data', jsonData);
});