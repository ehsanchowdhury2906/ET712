let index = 0; // Controls the starting position

    // Function to display only 3 cards at a time
    function displayCards() {
        let cards = document.querySelectorAll(".card");
        let totalCards = cards.length;

        cards.forEach((card, i) => {
            card.style.display = (i >= index && i < index + 3) ? 'block' : 'none';
        });
    }

    // Function to shift the gallery forward
    function nextSlide() {
        let cards = document.querySelectorAll(".card");
        let totalCards = cards.length;
        
        if (index + 3 < totalCards) {
            index += 3;
        } else {
            index = 0; // Loop back to the start
        }

        displayCards();
    }

    // Function to shift the gallery backward
    function prevSlide() {
        let cards = document.querySelectorAll(".card");
        let totalCards = cards.length;

        if (index - 3 >= 0) {
            index -= 3;
        } else {
            index = Math.max(0, totalCards - (totalCards % 3 || 3)); // Loop to the last set
        }

        displayCards();
    }

    // Add event listeners to buttons only if they exist
    window.onload = function () {
        displayCards();

        let nextBtn = document.getElementById("nextBtn");
        let prevBtn = document.getElementById("prevBtn");

        if (nextBtn) nextBtn.addEventListener("click", nextSlide);
        if (prevBtn) prevBtn.addEventListener("click", prevSlide);
    };
