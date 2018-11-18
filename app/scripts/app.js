import $ from 'jquery';
import { isMobileDevice } from './components/Util';

if (module.hot) {
  module.hot.accept();
}

class Main {
  constructor() {
    this.bindEvents();
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
