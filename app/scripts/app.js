import $ from 'jquery';
import { findCurrentTabSelector, slideMenu, tabContainerHeight } from './components/Util';

if (module.hot) {
  module.hot.accept();
}

class Main {
  constructor() {
    this.bindEvents();
    slideMenu('.menu__slider');
  }

  bindEvents() {
    $('.menu__item').on('click', e => this.onTabClick(e));
    $('.js-hamburger').on('click', e => this.openMenu(e));

    $(document).on('scroll', () => this.onScroll());
    $(window).on('resize', () => slideMenu('.menu__slider'));
  }

  openMenu(e) {
    $(e.currentTarget).toggleClass('active');

    if ($(e.currentTarget).hasClass('active')) {
      $('body').addClass('overflow--hidden');
    } else {
      $('body').removeClass('overflow--hidden');
    }
  }

  onTabClick(e) {
    e.preventDefault();
    const id = e.currentTarget.hash;
    const scrollTop = $(id).offset().top - tabContainerHeight + 2;

    $('html, body').animate({
      scrollTop: scrollTop
    }, 600);

    if ($('.js-hamburger').hasClass('active')) {
      $('body').removeClass('overflow--hidden');
      $('.js-hamburger').removeClass('active');
    }
  }

  onScroll() {
    this.shrinkHeader();
    findCurrentTabSelector('.menu__item');
  }

  shrinkHeader() {
    if ($(document).scrollTop() > 100) {
      $('header').addClass('shrink');
    } else {
      $('header').removeClass('shrink');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable */
  new Main();
  /* eslint-enable */
});
