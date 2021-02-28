export default () => {
  const wrapLang = document.querySelector('.js-lang-wrap');
  const btnLangToggle = wrapLang.querySelector('.js-btn-lang-toggle');
  const langsContainer = wrapLang.querySelector('.js-langs');

  if (!wrapLang) return;

  const toggleLang = () => {
    langsContainer.classList.toggle('is-show');
  };

  const hideLangs = () => {
    if (langsContainer.classList.contains('is-show')) {
      langsContainer.classList.remove('is-show');
    };
  };

  btnLangToggle.addEventListener('click', toggleLang);
  window.addEventListener('scroll', hideLangs);
};