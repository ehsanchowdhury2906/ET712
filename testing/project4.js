        let index = 0; // Controls the starting position
        let gallery = document.getElementById("gallery");

        // Function to display only 3 cards at a time
        function displayCards() {
            let cards = document.querySelectorAll(".card");
            cards.forEach((card, i) => {
                card.style.display = (i >= index && i < index + 3) ? 'block' : 'none';
            });
        }

        // Function to shift the gallery forward
        function nextSlide() {
            index = (index + 3) % 6; // Move forward and loop back to start
            displayCards();
        }

        // Function to shift the gallery backward
        function prevSlide() {
            index = (index - 3 + 6) % 6; // Move backward and loop to the end
            displayCards();
        }

        // Add event listeners to buttons
        document.getElementById("nextBtn").addEventListener("click", nextSlide);
        document.getElementById("prevBtn").addEventListener("click", prevSlide);

        // Display initial set of cards on page load
        window.onload = displayCards;
