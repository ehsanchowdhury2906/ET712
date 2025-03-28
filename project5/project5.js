document.addEventListener("DOMContentLoaded", function () {
    // Get all cards
    let cards = document.querySelectorAll(".card");

    // Add event listener to each card
    cards.forEach(card => {
        card.addEventListener("click", function () {
            let section = card.getAttribute("data-section");

            // Navigate to the respective section (replace with actual URLs)
            window.location.href = section + ".html"; // Example: colors.html, numbers.html, etc.
        });
    });
});
