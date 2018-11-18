import $ from 'jquery';
import { isMobileDevice } from './components/Util';

if (module.hot) {
  module.hot.accept();
}

class Main {
  constructor() {
    this.bindEvents();
    console.log(isMobileDevice);
  }

  bindEvents() {
    $(document).on('scroll', () => {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable */
  new Main();
  /* eslint-enable */
});
