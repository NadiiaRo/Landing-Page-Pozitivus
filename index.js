document.addEventListener("DOMContentLoaded", function(event) {

    const accordionItems = document.querySelectorAll(".process-reveal");
    const accordionItemsParents =  document.querySelectorAll(".process-cards");

    accordionItems.forEach(item =>
        item.addEventListener("click", () => {
            const parent = item.parentElement.parentElement;
            const isItemOpen = parent.classList.contains("open-process");

            accordionItemsParents.forEach(item => item.classList.remove("open-process"));
            if (!isItemOpen) {
                parent.classList.toggle("open-process");
            }
        })
    );
});