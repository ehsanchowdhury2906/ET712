function navigateTo(page) {
    window.location.href = page;
}

// Ensure the page loads with four cards displayed
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener("click", function () {
            let pageName = this.querySelector("h3").textContent.toLowerCase() + ".html";
            navigateTo(pageName);
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

// Numbers quiz logic
function checkAnswer(answer) {
    let feedback = document.getElementById("feedback");
    if (answer === 2) {
        feedback.textContent = "Correct! 🎉";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Try again! ❌";
        feedback.style.color = "red";
    }
}
