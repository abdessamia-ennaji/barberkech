document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    const heroBg = document.querySelector('.hero-bg');
    let currentSlide = 0;
    let autoSlide;
    
    // Array of background images for each slide (match your slide order)
    const backgroundImages = [
        './assets/images/hero-banner.jpg',
        './assets/images/hero-banner2.jpg',
        './assets/images/hero-banner3.jpg'
        
    ];

    // Function to show a specific slide and update background
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Update the fixed background image
        heroBg.style.backgroundImage = `url('${backgroundImages[currentSlide]}')`;
    }

    // Function to start auto-sliding
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    // Function to stop auto-sliding
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Initial setup
    showSlide(currentSlide);
    startAutoSlide();

    // Next slide
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(currentSlide + 1);
        startAutoSlide();
    });

    // Previous slide
    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(currentSlide - 1);
        startAutoSlide();
    });

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            showSlide(slideIndex);
            startAutoSlide();
        });
    });

    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
});