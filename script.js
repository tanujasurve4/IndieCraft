document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    let currentIndex = 0;

    function updateCarousel(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    }

    prevButton.addEventListener("click", () => {
        updateCarousel(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        updateCarousel(currentIndex + 1);
    });

    setInterval(() => {
        updateCarousel(currentIndex + 1);
    }, 5000);
});


