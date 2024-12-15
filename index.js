document.addEventListener("DOMContentLoaded", function(event) {

    const accordionItems = document.querySelectorAll(".process-reveal");
    const accordionItemsParents =  document.querySelectorAll(".process-cards");

    accordionItems.forEach(item =>
        item.addEventListener("click", () => {
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


        const container = document.querySelector('.carousel-container');
        const items = document.querySelectorAll('.carousel-item');
        const btnPrev = document.querySelector('.btn-prev');
        const btnNext = document.querySelector('.btn-next');
        const dots = document.querySelectorAll(".dot");

        let currentIndex = 0;

        function updateCarousel() {
            const itemWidth = items[0].offsetWidth; // Dynamic width calculation
            const gap = parseFloat(window.getComputedStyle(container).gap) || 0; // Get gap value
            const initialOffset = 300;
            const offset = currentIndex * (itemWidth + gap);
            container.style.transform = `translateX(${initialOffset - offset}px)`; // Fixed template literal syntax

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


});
