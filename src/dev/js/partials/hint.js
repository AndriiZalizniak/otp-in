import {isIPhone} from './Lib'; 

const getContainer = ({ target }) => target.closest('.js-tip');
const getContent = (target) => target.closest('.js-tip')
  .querySelector('.js-hint-target');

export default () => {
  let currentTip = null;
  const tips = document.querySelectorAll('.js-tip');
  
  const isPhone = isIPhone();
  
  function showTip(e) {
    const container = getContainer(e);

    if (currentTip) {
      hideTip(e);

      if (container === currentTip) return;
    }

    currentTip = container;
    currentTip.classList.add('js-tip--hint-open');
    posTipBlock(e);
  }
  
  const resetPosition = ({ target }) => {
    if (!target) return;

    target.style.left = '';
    target.style.width = '';
    target.style.right = '';

    target.removeEventListener('transitionend', resetPosition);
  }
  
  function hideTip(e) {
    // console.log(currentTip);
    if (!currentTip) return;
    const target = currentTip;
    const block = getContent(currentTip);

    block.addEventListener('transitionend', resetPosition);
    target.classList.remove('js-tip--hint-open');
    currentTip = null;

    if(isPhone) document.removeEventListener('touchstart', hideTip);
  }
  
  function posTipBlock(e) {
    const tip = currentTip;
    if(!tip.classList.contains('js-tip')) return;

    const block = getContent(tip);

    if (window.innerWidth > 576) {
      const rectBlock = block.getBoundingClientRect();
      const transformRight = window.innerWidth - 40 - rectBlock.right;
      
      if (transformRight < 0 ) {
        block.style.left = transformRight + 'px';
      }
      
    } else {
      block.style.width = 'auto';
      const rectBlock = block.getBoundingClientRect();
      block.style.left = -rectBlock.left + 20 + 'px';
      block.style.width = window.innerWidth - 40 + 'px';
    }
    
    if(isPhone) {
      e.stopPropagation();
      document.addEventListener('touchstart', hideTip, false);
    }
  }
  
  for (let i = 0; i < tips.length; i++) {
    tips[i].addEventListener(isPhone ? 'touchstart' : 'mouseenter', showTip, false);
    !isPhone && tips[i].addEventListener('mouseleave', hideTip, false);
  }
};
