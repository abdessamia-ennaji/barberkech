const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const caption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// Open modal
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showModal();
    });
});

// Close modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Zoom functionality
modalImg.addEventListener('click', () => {
    modal.classList.toggle('zoomed');
});

// Navigation
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showModal();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showModal();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            showModal();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            showModal();
        } else if (e.key === 'Escape') {
            closeModal();
        }
    }
});

// Touch swipe support
modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function showModal() {
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);
    modalImg.src = galleryImages[currentIndex].src;
    modalImg.alt = galleryImages[currentIndex].alt;
    caption.textContent = galleryImages[currentIndex].dataset.caption;
    modal.classList.remove('zoomed');
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

function handleSwipe() {
    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) > 50) {  // Minimum swipe distance
        if (swipeDistance > 0) {
            currentIndex = (currentIndex + 1) % galleryImages.length;
        } else {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        }
        showModal();
    }
}
