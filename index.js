document.addEventListener("DOMContentLoaded", function (event) {

    // Process Section - Card Description Reveal:

    const accordionItems = document.querySelectorAll(".process-reveal");
    const accordionItemsParents = document.querySelectorAll(".process-cards");

    accordionItems.forEach(item => item.addEventListener("click", () => {
        const parent = item.parentElement.parentElement;
        const isItemOpen = parent.classList.contains("open-process");
        const icon = item.children;

        if (isItemOpen) {
            icon[0].style.display = 'block';
            icon[1].style.display = 'none';
        }

        accordionItemsParents.forEach(item => item.classList.remove("open-process"));
        if (!isItemOpen) {
            parent.classList.toggle("open-process");
            icon[0].style.display = 'none';
            icon[1].style.display = 'block';
        }
    }))


    // Testimonials Section - Carousel:
    //
    // const container = document.querySelector('.carousel-container');
    // const items = document.querySelectorAll('.carousel-item');
    // const btnPrev = document.querySelector('.btn-prev');
    // const btnNext = document.querySelector('.btn-next');
    // const dots = document.querySelectorAll(".dot");
    //
    // let currentIndex = 0;
    //
    // function updateCarousel() {
    //     const itemWidth = items[0].offsetWidth; // Dynamic width calculation
    //     const gap = parseFloat(window.getComputedStyle(container).gap) || 0; // Get gap value
    //     let initialOffset;
    //
    //     if (window.innerWidth >= 1200) {
    //         // For larger screens
    //         initialOffset = (itemWidth + gap) / 2;
    //     } else {
    //         // For smaller screens
    //         initialOffset = 0;
    //     }
    //
    //     const offset = currentIndex * (itemWidth + gap);
    //     container.style.transform = `translateX(${initialOffset - offset}px)`; // Fixed template literal syntax
    //
    //     // Enable/disable buttons
    //     btnPrev.disabled = currentIndex <= 0;
    //     btnNext.disabled = currentIndex >= items.length - 1;
    //
    //     // Update dot styles
    //     dots.forEach((dot, index) => {
    //         dot.classList.toggle("active", index === currentIndex);
    //     });
    // }
    //
    // function movePrev() {
    //     if (currentIndex > 0) {
    //         currentIndex -= 1;
    //         updateCarousel();
    //     }
    // }
    //
    // function moveNext() {
    //     if (currentIndex < items.length - 1) {
    //         currentIndex += 1;
    //         updateCarousel();
    //     }
    // }
    //
    // // Attach event listeners
    // btnPrev.addEventListener('click', movePrev);
    // btnNext.addEventListener('click', moveNext);
    //
    // // Initialize carousel
    // updateCarousel();


    // CAROUSEL - TEST

    function initializeCarousel() {
        const isMobile = window.innerWidth < 425;

        if (isMobile) {
            // Touch-based carousel behavior for mobile screens
            const carouselTrack = document.querySelector('.cases-carousel-track');
            let isDragging = false;
            let startX = 0;
            let scrollLeft = 0;

            carouselTrack.addEventListener('touchstart', (e) => {
                isDragging = true;
                startX = e.touches[0].pageX;
                scrollLeft = carouselTrack.scrollLeft;
            });

            carouselTrack.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                const currentX = e.touches[0].pageX;
                const distance = startX - currentX;
                carouselTrack.scrollLeft = scrollLeft + distance;
            });

            carouselTrack.addEventListener('touchend', () => {
                isDragging = false;
            });
        } else {
            // Button-based carousel behavior for larger screens
            const container = document.querySelector('.carousel-container');
            const items = document.querySelectorAll('.carousel-item');
            const btnPrev = document.querySelector('.btn-prev');
            const btnNext = document.querySelector('.btn-next');
            const dots = document.querySelectorAll(".dot");

            let currentIndex = 0;

            function updateCarousel() {
                const itemWidth = items[0].offsetWidth; // Dynamic width calculation
                const gap = parseFloat(window.getComputedStyle(container).gap) || 0; // Get gap value
                let initialOffset;

                if (window.innerWidth >= 1200) {
                    // For larger screens
                    initialOffset = (itemWidth + gap) / 2;
                } else {
                    // For smaller screens
                    initialOffset = 0;
                }

                const offset = currentIndex * (itemWidth + gap);
                container.style.transform = `translateX(${initialOffset - offset}px)`;

                // Enable/disable buttons
                btnPrev.disabled = currentIndex <= 0;
                btnNext.disabled = currentIndex >= items.length - 1;

                // Update dot styles
                dots.forEach((dot, index) => {
                    dot.classList.toggle("active", index === currentIndex);
                });
            }

            function movePrev() {
                if (currentIndex > 0) {
                    currentIndex -= 1;
                    updateCarousel();
                }
            }

            function moveNext() {
                if (currentIndex < items.length - 1) {
                    currentIndex += 1;
                    updateCarousel();
                }
            }

            // Attach event listeners
            btnPrev.addEventListener('click', movePrev);
            btnNext.addEventListener('click', moveNext);

            // Initialize carousel
            updateCarousel();
        }
    }

// Call `initializeCarousel` on page load
    initializeCarousel();

// Reinitialize carousel behavior on window resize
    window.addEventListener('resize', initializeCarousel);


    // Mobile Menu - Hamburger:
    const hamburgerMenu = document.querySelector(".hamburger-lines");
    const mobileMenu = document.querySelector(".menu-items");
    const body = document.querySelector("body")

    hamburgerMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
        const isOpen = mobileMenu.classList.contains("show");

        // Update hamburger menu content
        hamburgerMenu.innerHTML = isOpen
            ? "<img src='images/x-letter.svg'>"// Close icon
            : `
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        `;

        isOpen ? body.classList.add("no-scroll") : body.classList.remove("no-scroll");
    });


    // MOBILE CASES ANIMATION


});
