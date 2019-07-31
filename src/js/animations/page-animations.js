import { TimelineMax, Expo, Power3, Back } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

// eslint-disable-next-line no-unused-vars
let plugins = [TextPlugin];

document.addEventListener('DOMContentLoaded', () => {
  let navLogo = document.querySelector('.nav__logo'),
    contentNav = document.querySelector('.content__nav'),
    contentSlider = document.querySelector('.content__slider'),
    contentTexts = document.querySelector('.content__texts'),
    navItems = document.querySelectorAll('.nav__item'),
    footerItems = document.querySelectorAll('.footer__item');

  // ---------------------------------------------------

  // Content__nav links animation variables
  let artLink = document.getElementById('artLink'),
    workLink = document.getElementById('workLink'),
    onlineLink = document.getElementById('onlineLink'),
    collectionLink = document.getElementById('collectionLink'),
    linkArray = [artLink, workLink, onlineLink, collectionLink],
    contentImage = document.querySelector('.content__slider img'),
    contentName = document.querySelector('.content__texts__name'),
    contentDesc = document.querySelector('.content__texts__desc'),
    contentFooter = document.querySelector('.content__texts__footer');
  let imgs = {
    artImg:
      'https://images.unsplash.com/photo-1453814235491-3cfac3999928?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    workImg:
      'https://images.unsplash.com/photo-1562185022-c0a7889d7fbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    onlineImg:
      'https://images.unsplash.com/photo-1511424323602-d3c1a4138056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    collectionImg:
      'https://images.unsplash.com/photo-1536604673810-81370412626d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
  };
  let people = {
    art: {
      name: 'Benjamin Vnuk',
      desc: 'Muse magazine',
      footer: 'Curated by Arknet'
    },
    work: {
      name: 'Karin Westerlund',
      desc: 'Space divided',
      footer: ''
    },
    online: {
      name: 'Anders Kylberg',
      desc: 'Simple make up',
      footer: 'Express yourself'
    },
    collection: {
      name: 'Jurij Wasylov',
      desc: 'New trends',
      footer: ''
    }
  };

  // ---------------------------------------------------

  // Page load animation
  const timeline = new TimelineMax();
  timeline
    .set(contentSlider, { x: '-50%', y: '-50%', scale: 1, autoAlpha: 1 })
    .from(navLogo, 1, { y: -50, autoAlpha: 0, ease: Power3.easeInOut })
    .add('links')
    .staggerFrom(
      navItems,
      0.8,
      { y: -50, autoAlpha: 0, ease: Power3.easeInOut },
      0.4,
      'links-=0.7'
    )
    .fromTo(
      contentNav,
      1.5,
      { left: '-5%', autoAlpha: 0 },
      { left: '5%', autoAlpha: 1, ease: Expo.easeInOut },
      '-=2'
    )
    .from(
      contentSlider,
      2,
      {
        scale: 0,
        autoAlpha: 0,
        ease: Back.easeInOut.config(1.1)
      },
      '-=1'
    )
    .fromTo(
      contentTexts,
      1.5,
      { right: '-5%', autoAlpha: 0 },
      { right: '5%', autoAlpha: 1, ease: Expo.easeInOut },
      '-=1.5'
    )
    .staggerFrom(
      footerItems,
      0.8,
      { y: 50, autoAlpha: 0, ease: Power3.easeInOut },
      0.4,
      'links-=0.5'
    );

  // ---------------------------------------------------

  // Content_nav links animation function
  const changeContent = (link, img, person) => {
    const contentTimeline = new TimelineMax();
    contentTimeline
      .to(contentSlider, 0.8, {
        y: '-=700',
        autoAlpha: 0,
        ease: Expo.easeIn
      })
      .staggerTo(
        [contentName, contentDesc, contentFooter],
        0.8,
        {
          y: '-=50',
          autoAlpha: 0,
          ease: Expo.easeIn
        },
        0.2,
        '-=0.6'
      )
      .set(contentSlider, { y: '+=1400' })
      .set(contentImage, { src: img })
      .set(contentName, { text: person.name, y: '+=100' })
      .set(contentDesc, { text: person.desc, y: '+=100' })
      .set(contentFooter, { text: person.footer, y: '+=100' })
      .to(contentSlider, 0.8, {
        y: '-=700',
        autoAlpha: 1,
        ease: Expo.easeOut
      })
      .staggerTo(
        [contentName, contentDesc, contentFooter],
        0.8,
        {
          y: '-=50',
          autoAlpha: 1,
          ease: Power3.easeOut
        },
        0.2,
        '-=0.6'
      );
  };
  for (const link of linkArray) {
    link.addEventListener('click', () => {
      switch (link) {
        case artLink:
          changeContent(link, imgs.artImg, people.art);
          break;
        case workLink:
          changeContent(link, imgs.workImg, people.work);
          break;
        case onlineLink:
          changeContent(link, imgs.onlineImg, people.online);
          break;
        case collectionLink:
          changeContent(link, imgs.collectionImg, people.collection);
          break;
        default:
          break;
      }
    });
  }
});
