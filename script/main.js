/*document.querySelectorAll(".carousel").forEach(carousel =>{
    const items =carousel.querySelectorAll(".carousel-item");
    const btnHtml = Array.from(items, () =>{
        return `<span class="carousel-btn"></span>`;
    })
    carousel.insertAdjacentHTML("beforeend",`
    <div class="carousel-nav">
     ${btnHtml.join("")}
    </div>
    `);
const buttons =carousel.querySelectorAll(".carousel-button");
  buttons.forEach((button,i) =>{
   buttons.addEventListener ("click",() =>{
    //un-select all the items
    items.forEach(item => item.classList.remove("carousel-item-selected"));
    buttons.forEach(button => button.classList.remove("carousel-btn-selected"));

    items[i].classList.add("carousel-item-selected");
    button.classList.add("carousel-btn-selected");
   });
  });
  //select the first item on page load
  items[0].classList.add("carousel-item-selected");
  buttons[0].classList.add("carousel-btn-selected");
}); */

let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 5000);
/*
let list = document.querySelector('.featureContainer .feature-flex-container');
let items = document.querySelectorAll('.featureContainer .feature-flex-container .feature-flex-items');
let dots = document.querySelectorAll('.featureContainer .dots li');
let active = 0;
let next = document.querySelectorAll('.featureContainer .feature-flex-container .feature-flex-items .feature-flex-items-text-icon .fa-solid')
 

 next.onclick = function(){
  active++;
  reloadSlider();
 } */
 /*function reloadSlider(){
   let checkLeft = items[active].offsetLeft;
   list.style.left = -checkLeft + 'px';
 } 

dots.forEach((li, key) => {
  li.addEventListener('click', function(){
    active = key;
    reloadSlider();
  })
})  */

  const swiperWrapper = document.querySelector('.feature-flex-container');
  const slides = document.querySelectorAll('.feature-flex-items');
  const dotsContainer = document.querySelector('.swiper-dots');

  let currentIndex = 0;

  slides.forEach((slide, index)=>{
    const dot = document.createElement('div');
    dot.classList.add('swiper-dot');
    if(index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
  });
   const dots = document.querySelectorAll('.swiper-dot');
   function updateSlidePosition(){
    swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      if(index === currentIndex){
        dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
    });
   }
   function goToSlide(index){
    currentIndex = index;
    updateSlidePosition();
    
   }
   const clientSliderContainer = document.querySelector('.ClientsTestimonialSliderDiv');
   const clientSlider = document.querySelectorAll('.ClientsTestimonialsSliders')
    let resentIndex = 0;
    clientSlider.forEach((ClientSlide, index)=>{
      const clientDot = document.createElement('div');
      clientDot.classList.add('clientSlider-dot');
      if(index === 0) clientDot.classList.add('active');
      clientDot.addEventListener('click', () => clientGoToSlide(index));
      clientSliderContainer.appendChild(clientDot);
    });
    const clientDots = document.querySelectorAll('.clientSlider-dot');
    function updateClientSliderPosition(){
      clientSliderContainer.style.transform = `translateX(-${resentIndex * 50}%)`
      clientDots.forEach((clientDot, index) => {
        if(index === resentIndex){
          clientDot.classList.add('active');
          } else {
            clientDot.classList.remove('active');
    }
    });
  }
  function clientGoToSlide(index){
    resentIndex = index;
    updateClientSliderPosition();
  }