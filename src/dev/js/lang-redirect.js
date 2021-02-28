
const browserLang = navigator.language;

const langRedirect = () => {
  const DE = 'https://cloud.mail.mymsd.ch/optin-de';
  const FR = 'https://cloud.mail.mymsd.ch/optin-fr';
  const IT = 'https://cloud.mail.mymsd.ch/optin-it';

  if (browserLang === 'fr-FR' || browserLang === 'fr') {
    return window.location.href = FR;
  }

  if (browserLang === 'it-IT' || browserLang === 'it') {
    return window.location.href = IT;

  } else {
    return window.location.href = DE;
  }
};

langRedirect();

console.log(browserLang);