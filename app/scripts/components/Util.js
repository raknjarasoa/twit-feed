const $ = require('jquery');

const menuItemPaddings = 40;
let currentTab = $('.menu__item:first-of-type');
let currentId = currentTab.attr('href');

export const tabContainerHeight = 70;

export const findCurrentTabSelector = (selector) => {
  let newCurrentId;
  let newCurrentTab;

  $(selector).each(function () {
    const id = $(this).attr('href');
    const offsetTop = $(id).offset().top - tabContainerHeight;
    const offsetBottom =
      $(id).offset().top + $(id).height() - tabContainerHeight;

    if (
      $(window).scrollTop() > offsetTop &&
      $(window).scrollTop() < offsetBottom
    ) {
      newCurrentId = id;
      newCurrentTab = $(this);
    }
  });

  if (currentId !== newCurrentId || !currentId) {
    currentId = newCurrentId;
    currentTab = newCurrentTab;
    slideMenu('.menu__slider');
  }
};

export const slideMenu = (selector) => {
  const isMobileDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

  if (isMobileDevice) {
    $(selector).css('width', 0);
    $(selector).css('left', 0);
    return;
  }

  let width = 0;
  let left = 0;

  if (currentTab) {
    width = currentTab.css('width');
    left = currentTab.offset().left;
  }

  $(selector).css('width', width ? `${parseFloat(width) + menuItemPaddings}px` : width);
  $(selector).css('left', left);
};

// const Instance = new UserStore();
// Object.freeze(Instance);
// export default Instance;
