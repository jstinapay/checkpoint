let currentIndex = 0;
const track = document.getElementById('carouselTrack');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;


function getVisibleItems() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 968) return 2;
    return 3;
}

function moveCarousel(direction) {
    const visibleItems = getVisibleItems();
    const maxIndex = totalItems - visibleItems;

    currentIndex += direction;


    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    const gap = 30;
    const offset = currentIndex * (itemWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
}


window.addEventListener('resize', () => {
    currentIndex = 0;
    updateCarousel();
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveCarousel(-1);
    if (e.key === 'ArrowRight') moveCarousel(1);
});