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
    { name: "red", src: "https://img.freepik.com/free-vector/red-geometrical-background_1085-125.jpg?semt=ais_hybrid&w=740" },
    { name: "blue", src: "https://st.depositphotos.com/1655708/3785/i/450/depositphotos_37851997-stock-photo-magic-blue-blur-abstract-background.jpg" },
    { name: "green", src: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW58ZW58MHx8MHx8fDA%3D" },
    { name: "yellow", src: "https://via.placeholder.com/150/FFFF00/000000?text=Yellow" }
];

let currentColorIndex = 0;

function loadColor() {
    const colorImage = document.getElementById("colorImage");
    if (colorImage) {
        colorImage.src = colors[currentColorIndex].src;
    }
}

function checkAnswer() {
    const colorInput = document.getElementById("colorInput");
    const feedback = document.getElementById("feedback");

    if (colorInput && feedback) {
        const userAnswer = colorInput.value.trim().toLowerCase();
        const correctAnswer = colors[currentColorIndex].name.toLowerCase();

        console.log("User Answer:", userAnswer); // DEBUG LINE
        console.log("Correct Answer:", correctAnswer); // DEBUG LINE

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

document.addEventListener("DOMContentLoaded", function () {
    loadColor();
});
