function navigateTo(page) {
    window.location.href = page;
}

// Navigation: Redirect users when they click a card
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            let section = this.getAttribute("data-section");
            if (section) {
                window.location.href = section + ".html"; // Redirect to the correct page
            }
        });
    });
});

// Color Quiz Logic (for the color part)
const colors = [
    { name: "red", src: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Red" },
    { name: "blue", src: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Blue" },
    { name: "green", src: "https://via.placeholder.com/150/008000/FFFFFF?text=Green" },
    { name: "yellow", src: "https://via.placeholder.com/150/FFFF00/000000?text=Yellow" }
];

let currentColorIndex = 0;

function loadColor() {
    let colorImage = document.getElementById("colorImage");
    if (colorImage) {
        colorImage.src = colors[currentColorIndex].src;
    }
}

function checkAnswer() {
    let colorInput = document.getElementById("colorInput");
    let feedback = document.getElementById("feedback");

    if (colorInput) {
        let userAnswer = colorInput.value.toLowerCase();
        let correctAnswer = colors[currentColorIndex].name;

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! 🎉";
            feedback.style.color = "green";

            currentColorIndex = (currentColorIndex + 1) % colors.length;
            setTimeout(() => {
                colorInput.value = "";
                feedback.textContent = "";
                loadColor();
            }, 1000);
        } else {
            feedback.textContent = "Try again!";
            feedback.style.color = "red";
        }
    }
}

// Load color quiz if on the colors page
document.addEventListener("DOMContentLoaded", function () {
    if (document.body.getAttribute("data-page") === "colors") {
        loadColor();
    }
});
