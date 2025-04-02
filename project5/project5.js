function navigateTo(page) {
    window.location.href = page;
}

// Wait for the page to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");

    // Attach click event to each card
    cards.forEach(card => {
        card.addEventListener("click", function () {
            let pageName = this.getAttribute("data-page"); // Get target page from data attribute
            navigateTo(pageName);
        });
    });
});
