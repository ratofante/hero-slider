
const slider = () => {

   const pointers = document.querySelectorAll('.pointer');
   const slides = document.querySelectorAll('.slide');

   console.log(slides);

   pointers.forEach(pointer => {
      pointer.addEventListener('click', (e) => {

         let currentSlide;
         let newSlide;

         if (!pointer.classList.contains('active')) {
            pointers.forEach(p => {
               if (p.classList.contains('active')) {
                  p.classList.remove('active');
                  currentSlide = p.getAttribute('data-pointer');
                  console.log(currentSlide);
               }
               p.classList.contains('active') && p.classList.remove('active');
            })
            e.target.classList.add('active');

            let id = e.target.getAttribute('data-pointer');

            let activeSlide = () => {
               let active;
               slides.forEach(slide => {
                  if (slide.classList.contains('active')) {
                     console.log('found you!', slide);
                     active = slide;
                  }
                  return active;
               })
            }

         }
      })
   })

}

export default slider;