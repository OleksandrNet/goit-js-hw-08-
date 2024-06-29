let formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.elements.email;
const messageInput = formEl.elements.message;

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

formEl.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Будь ласка, заповніть всі поля');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
});
