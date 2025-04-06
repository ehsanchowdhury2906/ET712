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
    { name: "green", src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Green.PNG" },
    { name: "yellow", src: "https://thumb.ac-illust.com/d0/d05b7a0abad7d2b8eb521f0607174baa_t.jpeg" }
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



document.addEventListener("DOMContentLoaded", function () {
    let animalData = [
        { image: "https://media.tenor.com/Tw8FiJa_KWsAAAAe/alpha-wolf.png", correctFood: "meat" },
        { image: "https://img.freepik.com/free-psd/beautiful-cow-picture_23-2151840220.jpg?semt=ais_hybrid&w=740", correctFood: "grass" },
        { image: "https://cartoon-clipart.co/amp/images/yogi-bear2.png", correctFood: "fish" },
        { image: "https://seeklogo.com/images/D/donkey-kong-logo-4CB584F302-seeklogo.com.png", correctFood: "fruits" }
    ];

    let currentAnimal = Math.floor(Math.random() * animalData.length);
    document.getElementById("animal-image").src = animalData[currentAnimal].image;

    document.querySelectorAll(".answer-btn").forEach(button => {
        button.addEventListener("click", function () {
            let selectedFood = this.getAttribute("data-answer");
            let feedback = document.getElementById("feedback");

            if (selectedFood === animalData[currentAnimal].correctFood) {
                feedback.textContent = "Correct! 🎉";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Try again! ❌";
                feedback.style.color = "red";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("#shape-image")) {
        let shapesData = [
            { image: "https://img.freepik.com/free-vector/stroke-round-geometric-shape-vector_53876-175080.jpg?semt=ais_hybrid&w=740", answer: "circle" },
            { image: "https://img.freepik.com/premium-vector/rose-gold-glowing-square-frame_515038-14771.jpg?semt=ais_hybrid&w=740", answer: "square" },
            { image: "https://img.freepik.com/free-vector/rectangle-bronze-frame-white-background_53876-118821.jpg", answer: "rectangle" }
        ];

        let currentShapeIndex = 0;
        let shapeImage = document.getElementById("shape-image");
        let shapeInput = document.getElementById("shape-input");
        let submitButton = document.getElementById("submit-answer");
        let shapeFeedback = document.getElementById("shape-feedback");

        function loadShape() {
            shapeImage.src = shapesData[currentShapeIndex].image;
            shapeInput.value = "";
            shapeFeedback.textContent = "";
        }

        submitButton.addEventListener("click", function () {
            let userAnswer = shapeInput.value.trim().toLowerCase();
            if (userAnswer === shapesData[currentShapeIndex].answer) {
                shapeFeedback.textContent = "Correct! 🎉";
                shapeFeedback.style.color = "green";
                currentShapeIndex++;

                if (currentShapeIndex < shapesData.length) {
                    setTimeout(loadShape, 1000); // Load next shape after 1 second
                } else {
                    shapeFeedback.textContent = "Great job! You guessed all shapes! 🎉";
                }
            } else {
                shapeFeedback.textContent = "Try again! ❌";
                shapeFeedback.style.color = "red";
            }
        });

        loadShape(); // Load the first shape on page load
    }
});
