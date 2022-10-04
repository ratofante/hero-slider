import './scss/app.scss';

import slider from './js/slider';

document.addEventListener('DOMContentLoaded', () => {
   const searchInput = document.querySelector('#search');

   document.addEventListener('click', (event) => {
      console.log(event.target.id);
      console.log(event.target.closest('#btn-search'));
      if (event.target.id === 'btn-search') {
         searchInput.classList.toggle('active');
         searchInput.focus();
      } else if (event.target.id !== 'search') {
         searchInput.classList.remove('active');
      }
   })

   slider();
})
