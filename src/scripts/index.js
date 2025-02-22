
import { mobileVhFix } from './utils/mobile-vh-fix';

mobileVhFix();
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
    // в load следует добавить скрипты, не участвующие в работе первого экрана

  },
  true
);
