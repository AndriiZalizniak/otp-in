console.log('Main page script');

const closePopupBtn = document.querySelector('.js-btn-close-popup');
const popupSuccess = document.querySelector('.js-popup-success');
const form = document.querySelector('.js-form');

// const openPopup = (e) => {
//   e.preventDefault();
//   popupSuccess.classList.remove('js-hidden');

//   let url = e.target.action;

//   if (!url)
//     return;

//   let inputs = Array.from(e.target.querySelectorAll('.tnf-input'));
//   let data = {};

//   inputs.forEach(item => {
//     data[item.name] = item.value
//   });

//   fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data)
//   })
//     .then(res => {
//       console.log('sent', res);
//     });
// };

const openPopup = (e) => {
  alert('Vielen Dank für Ihre Registrierung!');
}

const closePopup = () => {
  popupSuccess.classList.add('js-hidden');
  document.location.reload();
};

form.addEventListener('submit', openPopup);
closePopupBtn.addEventListener('click', closePopup);