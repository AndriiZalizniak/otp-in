import Select from './form-2/select';

const Form2 = () => {
  const form = document.querySelector('.js-tnf-form-2-form');

  form.addEventListener('submit', () => {
    alert('Vielen Dank für Ihre Registrierung!');
  });

  const inputNumber = document.querySelector('.js-input-number');

  inputNumber.addEventListener('input', () => {
    if (inputNumber.value > 10) {
      inputNumber.value = 10;
    }
  })
};

const init = () => {
  Select();
  Form2();
};

window.addEventListener('load', init);