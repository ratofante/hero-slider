import './scss/app.scss';

import slider from './js/slider';
import menu from './js/menu';

document.addEventListener('DOMContentLoaded', () => {
   const searchInput = document.querySelector('#search');

   document.addEventListener('click', (event) => {
      if (event.target.id === 'btn-search') {
         searchInput.classList.toggle('active');
         searchInput.focus();
      } else if (event.target.id !== 'search') {
         searchInput.classList.remove('active');
      }
   })

   slider();
   menu();

})
