const scrollButton = document.querySelector('.slider-btn');
const gallery = document.querySelector('.slider-track');

let isScrolling = true;


scrollButton.addEventListener('click', () => {
    if (isScrolling) {
        gallery.style.animationPlayState = 'paused'; 
        scrollButton.innerHTML = `<ion-icon name="play-circle-outline"></ion-icon>`;
    } else {
        gallery.style.animationPlayState = 'running';
        scrollButton.innerHTML = '<ion-icon name="stop-circle-outline">';
    }
    isScrolling = !isScrolling; 
});



scrollButton.addEventListener('click', () => {
    if (condition) {
        
    } else {
        
    }
})