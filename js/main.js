'use strict';
{
  // Intersection Observer API

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');
  const toTop = document.getElementById('to_top');

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });


  /* menu */

  class Menu {
    constructor() {
      this.openMenu = document.getElementById('open-menu');
      this.overlay = document.querySelector('.overlay');
      this.mask = document.querySelector('.mask');
    }
    addListeners() {
      this.openMenu.addEventListener('click', () => {
        this.overlay.classList.add('show');
        this.mask.classList.remove('disable')
      });

      this.mask.addEventListener('click', () => {
        this.overlay.classList.remove('show');
        this.mask.classList.add('disable');
      });
    }
  }

  const menu = new Menu();
  menu.addListeners();

  
  /* slideshow */

  class SlideShow {
    constructor() {
      this.images = document.querySelectorAll('.hero img');
      this.currentIndex = 0;
    }

    play() {
      setTimeout(() => {
        this.images[this.currentIndex].classList.remove('current');
        this.currentIndex++;
        if (this.currentIndex > this.images.length - 1) {
          this.currentIndex = 0;
        }
        this.images[this.currentIndex].classList.add('current');
        this.play();
      }, 5000);
    }
  }
  
  const slideshow = new SlideShow();
  slideshow.play();

}