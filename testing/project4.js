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

const colors = [
  { name: "red", src: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Red" },
  { name: "blue", src: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Blue" },
  { name: "green", src: "https://via.placeholder.com/150/008000/FFFFFF?text=Green" },
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
  const input = document.getElementById("colorInput");
  const feedback = document.getElementById("feedback");

  if (!input || !feedback) return;

  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = colors[currentColorIndex].name;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! 🎉";
    feedback.style.color = "green";

    currentColorIndex = (currentColorIndex + 1) % colors.length;

    setTimeout(() => {
      input.value = "";
      feedback.textContent = "";
      loadColor();
    }, 1000);
  } else {
    feedback.textContent = "Try again!";
    feedback.style.color = "red";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadColor();

  document.getElementById("submitBtn").addEventListener("click", checkAnswer);

  document.getElementById("homeButton").addEventListener("click", () => {
    window.location.href = "project5.html";
  });
});


document.addEventListener("DOMContentLoaded", function () {
    let animalData = [
        { image: "https://via.placeholder.com/300x200?text=Lion", correctFood: "meat" },
        { image: "https://via.placeholder.com/300x200?text=Cow", correctFood: "grass" },
        { image: "https://via.placeholder.com/300x200?text=Penguin", correctFood: "fish" },
        { image: "https://via.placeholder.com/300x200?text=Monkey", correctFood: "fruits" }
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
            { image: "https://via.placeholder.com/200x200?text=Circle", answer: "circle" },
            { image: "https://via.placeholder.com/200x200?text=Square", answer: "square" },
            { image: "https://via.placeholder.com/300x200?text=Rectangle", answer: "rectangle" }
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

// Ensure script runs after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let selectedAnswer = parseInt(this.getAttribute("data-answer"));
            checkAnswer(selectedAnswer);
        });
    });
});

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

// Ensure script runs after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let selectedAnswer = parseInt(this.getAttribute("data-answer"));
            checkAnswer(selectedAnswer);
        });
    });

    // Add functionality to Home Button
    let homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "project4.html";
    });
});

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
