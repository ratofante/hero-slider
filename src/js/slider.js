import { gsap } from 'gsap';

const slider = () => {

   const pointers = document.querySelectorAll('.pointer');
   const slides = document.querySelectorAll('.slide');
   const backgrounds = document.querySelectorAll('.slider-bg');

   function getNewBg(id) {
      let actualBg;
      backgrounds.forEach(bg => {
         if (bg.getAttribute('data-slide') === id) {
            actualBg = bg;
         }
      })
      return actualBg;
   }

   let currentBg = getNewBg(document.querySelector('.slide.active').getAttribute('data-slide'));

   gsap.fromTo('.slide.active',
      { x: '-40%', y: '-40%', opacity: 0, filter: 'blur(6px)', visibility: 'hidden' },
      { duration: 1, visibility: 'visible', x: '-50%', y: '-50%', opacity: 1, filter: 'blur(0px)' })
   gsap.to(currentBg, { duration: 2, opacity: 1 });

   pointers.forEach(pointer => {
      pointer.addEventListener('click', (e) => {

         let currentSlide;
         let currentId;
         let newSlide;
         let newBg;

         if (!pointer.classList.contains('active')) {
            //resolvemos current slide/pointer
            pointers.forEach(p => {
               if (p.classList.contains('active')) {
                  p.classList.remove('active');
                  currentId = p.getAttribute('data-pointer');
               }
               p.classList.contains('active') && p.classList.remove('active');
            })

            slides.forEach(slide => {
               if (slide.getAttribute('data-slide') === currentId) {
                  currentSlide = slide;
               } else if (slide.getAttribute('data-slide') === e.target.getAttribute('data-pointer')) {
                  newSlide = slide;
               }
            })

            let tl = gsap.timeline();

            tl.to(currentSlide, {
               duration: 1, opacity: 0, x: '-40%', y: '-40%', filter: 'blur(6px)', onComplete: () => {
                  currentSlide.classList.toggle('active');
               }
            })
               .to('.slider-mask', { duration: 1, backdropFilter: 'blur(20px)' }, "<")
               .fromTo(newSlide,
                  { opacity: 0, filter: 'blur(6px)', x: '-40%', y: '-40%' },
                  { duration: 1, x: '-50%', y: '-50%', opacity: 1, filter: 'blur(0px)' }, "<")
               .to('.slider-mask', {
                  duration: 2, backdropFilter: 'blur(0px)', onStart: () => {
                     newSlide.classList.toggle('active');
                     e.target.classList.add('active');
                     newBg = getNewBg(e.target.getAttribute('data-pointer'));
                     gsap.fromTo(newBg, { opacity: 0 }, { duration: 1, opacity: 1 })
                  }
               }, "<0.5")
               .to(currentBg, { opacity: 0 }, "<");

            currentBg = getNewBg(e.target.getAttribute('data-pointer'));

         }
      })
   })

}

export default slider;