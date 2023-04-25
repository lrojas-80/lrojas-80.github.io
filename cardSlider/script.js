const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const arrowsBtn = document.querySelectorAll('.wrapper i')
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
const carouselChildrens = [...carousel.children];
let isDragging = false, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//insert copias de varias tarjetas al iniciar
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
})

//insert copias de varias tarjetas al iniciar
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML('beforeend', card.outerHTML);
})

arrowsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id ==='left' ? -firstCardWidth : firstCardWidth;
    })
    
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging');
    //graba la posición inicial del carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) {
      return;
    }
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove('dragging')

}
const autoPlay = () =>{
    if (window.innerWidth < 800) {
      return;
    }
    timeoutId=setTimeout(() => carousel.scrollLeft += firstCardWidth,2500);
}
autoPlay();
const infiniteScroll = () => {
    if(carousel.scrollLeft ===0) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.scrollWidth);
        carousel.classList.remove('no-transition');

    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition');
    }
    //si paso el mouse y está en autoplay se detiene, cuando cado el mouse continua
    clearTimeout(timeoutId);
    if (!wrapper.matches(':hover')) {
      autoPlay();
    }
}
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);
wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
wrapper.addEventListener('mouseleave', autoPlay);