const capitalize = (str = '') => (str.length > 0 ? `${str[0].toUpperCase()}${str.slice(1)}` : '');

const encodeUrlParameters = (params) =>
  `?${Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&')}`;

const isElement = (el) => el instanceof HTMLElement;

const htmlToElement = (htmlEntry) => {
  let html = htmlEntry;
  const template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
};

const insertAfter = (target, referenceNode, parentNode = referenceNode.parentNode) => {
  if (!isElement(target) || !isElement(referenceNode) || !isElement(parentNode)) return;
  parentNode.insertBefore(target, referenceNode.nextSibling);
};

const isIPhone = () => /iPad|iPhone|iPod/.test(navigator.userAgent);

module.exports = {
  capitalize,
  encodeUrlParameters,
  htmlToElement,
  insertAfter,
  isIPhone,
};
