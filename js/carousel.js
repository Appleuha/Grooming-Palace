document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    
    let currentIndex = 0;
    let slideInterval;

    // Функция перемещения к слайду
    function moveToSlide(index) {
        const slideWidth = slides[0].getBoundingClientRect().width + 20;
        track.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';
        currentIndex = index;
    }

    // Функция следующего слайда
    function nextSlide() {
        if (currentIndex >= slides.length - 4) {
            moveToSlide(0); // Возвращаемся к началу когда дошли до конца
        } else {
            moveToSlide(currentIndex + 1);
        }
    }

    // Функция предыдущего слайда
    function prevSlide() {
        if (currentIndex <= 0) {
            moveToSlide(slides.length - 4); // Переходим к концу когда в начале
        } else {
            moveToSlide(currentIndex - 1);
        }
    }

    // Автопрокрутка
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    // Обработчики событий
    nextButton.addEventListener('click', function() {
        clearInterval(slideInterval);
        nextSlide();
        startSlideShow();
    });

    prevButton.addEventListener('click', function() {
        clearInterval(slideInterval);
        prevSlide();
        startSlideShow();
    });

    // Запускаем автоматическую прокрутку
    startSlideShow();
});