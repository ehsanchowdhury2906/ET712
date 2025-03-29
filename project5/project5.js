document.addEventListener("DOMContentLoaded", function () {
 
    let cards = document.querySelectorAll(".card");

   
    cards.forEach(card => {
        card.addEventListener("click", function () {
            let section = card.getAttribute("data-section");

            // Navigate to the respective section (replace with actual URLs)
            window.location.href = section + ".html";
            window.location.href = section + ".html";
            window.location.href = section + ".html";
            window.location.href = section + ".html";
        });
    });
});
