import { TimelineMax } from 'gsap';
import SplitText from '../gsap-plugins/SplitText';

document.addEventListener('DOMContentLoaded', () => {
  let links = document.querySelectorAll('.content__nav__link');

  const changeColor = (link, linkColor) => {
    const tl = new TimelineMax();
    let mySpliText = new SplitText(link, { type: 'words,chars' });
    let chars = mySpliText.chars;
    tl.staggerTo(chars, 0.08, { color: linkColor }, 0.08);
  };

  for (const link of links) {
    link.addEventListener('mouseenter', () => changeColor(link, '#fff'));
    link.addEventListener('mouseleave', () => changeColor(link, 'orange'));
  }
});
