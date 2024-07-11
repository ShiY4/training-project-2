let numOfElements = document.querySelectorAll('.participants-cards-page').length;
console.log(numOfElements);





document.addEventListener("DOMContentLoaded", function () {
    const button_next = document.querySelector('[data-button-next]');
    const button_prev = document.querySelector('[data-button-prev]');

    const swiperCounterCurrent = document.querySelector('.swiper-counter__text_current');
    const swiperCounterTotal = document.querySelector('.swiper-counter__text_total');

    const carousel = document.querySelector('.participants-swiper');
    const participantsCardsPage = document.querySelectorAll('.participants-cards-page');

    swiperCounterTotal.innerHTML = numOfElements;
    swiperCounterCurrent.innerHTML = [...participantsCardsPage].indexOf(carousel.querySelector('.participants-cards-page_active'))+1;
    check();

    button_next.addEventListener("click", () => {
        let activeItem = carousel.querySelector('.participants-cards-page_active');
        console.log('next');
        activeItem.nextElementSibling.classList.add('participants-cards-page_active');
        activeItem.classList.remove('participants-cards-page_active');
        swiperCounterCurrent.innerHTML = [...participantsCardsPage].indexOf(carousel.querySelector('.participants-cards-page_active'))+1;
        check();
    });

    button_prev.addEventListener("click", () => {
        let activeItem = carousel.querySelector('.participants-cards-page_active');
        console.log('prev');
        activeItem.previousElementSibling.classList.add('participants-cards-page_active');
        activeItem.classList.remove('participants-cards-page_active');
        swiperCounterCurrent.innerHTML = [...participantsCardsPage].indexOf(carousel.querySelector('.participants-cards-page_active'))+1;
        check();
    });

    function check() {
        console.log(parseInt(swiperCounterCurrent.innerHTML), parseInt(swiperCounterTotal.innerHTML))
        if( parseInt(swiperCounterCurrent.innerHTML) === parseInt(swiperCounterTotal.innerHTML) ) {
            console.log('assadasd')
            button_next.classList.remove('button_black')
            button_next.classList.add('button_blocked')
        }
        if( parseInt(swiperCounterCurrent.innerHTML) === 1 ) {
            button_prev.classList.remove('button_black')
            button_prev.classList.add('button_blocked')
        } 
        if( parseInt(swiperCounterCurrent.innerHTML) > 1 && parseInt(swiperCounterCurrent.innerHTML) !== parseInt(swiperCounterTotal.innerHTML)){
            button_next.classList.remove('button_blocked')
            button_next.classList.add('button_black')
            button_prev.classList.remove('button_blocked')
            button_prev.classList.add('button_black') 
        }
    };
});