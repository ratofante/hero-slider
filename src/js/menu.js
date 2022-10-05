import { gsap } from 'gsap';

const menuToggle = () => {

   const menuBtn = document.querySelector('.btn-menu');
   const menuList = document.querySelector('.menu-nav').classList;

   function menuAnimation() {
      let tl = gsap.timeline();
      tl.fromTo(menuBtn,
         { scale: 1 },
         {
            duration: .2, scale: 0, onComplete: () => {
               menuBtn.classList.toggle('open')
            }
         })
         .fromTo(menuBtn,
            { scale: 0 },
            { duration: .2, scale: 1 });
   }

   menuBtn.addEventListener('click', () => {

      menuAnimation();
      menuList.toggle('active');

   })

}

export default menuToggle;