document.addEventListener("DOMContentLoaded", function () {
    const width = document.body.clientWidth

    const button_next = document.querySelector('[data-button-next]');
    const button_prev = document.querySelector('[data-button-prev]');

    const swiperCounterCurrent = document.querySelector('.swiper-counter__text_current');
    const swiperCounterTotal = document.querySelector('.swiper-counter__text_total');

    const carousel = document.querySelector('.participants-swiper');
    const participantsCardsPage = document.querySelectorAll('.participants-cards-page');
    
    let numOfElements = document.querySelectorAll('.participants-cards-page').length;

    swiperCounterTotal.innerHTML = numOfElements;
    const changePage = () => {
        swiperCounterCurrent.innerHTML = [...participantsCardsPage].indexOf(carousel.querySelector('.participants-cards-page_active'))+1;
    };
    changePage();

    function nextParticipantsPage() {
        let activeItem = carousel.querySelector('.participants-cards-page_active');
        if(!activeItem.nextElementSibling) {
            let pages = carousel.children;
            pages[0].classList.add('participants-cards-page_active');
            activeItem.classList.remove('participants-cards-page_active');
            changePage();
        } else {
            activeItem.nextElementSibling.classList.add('participants-cards-page_active');
            activeItem.classList.remove('participants-cards-page_active');
            changePage();
        }
    }
    
    button_next.addEventListener("click", nextParticipantsPage);

    function prevParticipantsPage() {
        let activeItem = carousel.querySelector('.participants-cards-page_active');
        if(!activeItem.previousElementSibling) {
            let pages = carousel.children;
            pages[pages.length-1].classList.add('participants-cards-page_active');
            activeItem.classList.remove('participants-cards-page_active');
            changePage();
        } else {
            activeItem.previousElementSibling.classList.add('participants-cards-page_active');
            activeItem.classList.remove('participants-cards-page_active');
            changePage();
        }
    }

    button_prev.addEventListener("click", prevParticipantsPage);

    setInterval(nextParticipantsPage, 4000);
});


function buttonDisabler() {
    console.log(parseInt(swiperCounterCurrent.innerHTML), parseInt(swiperCounterTotal.innerHTML))
    if( parseInt(swiperCounterCurrent.innerHTML) === parseInt(swiperCounterTotal.innerHTML) ) {
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
