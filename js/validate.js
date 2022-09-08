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