<!-- Exercise 1: Form Validation and Event Handling -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <style>
        .error { color: red; font-size: 14px; }
        .success { color: green; font-size: 16px; }
    </style>
</head>
<body>
    <form id="userForm">
        <label>Name: <input type="text" id="name"></label>
        <span class="error" id="nameError"></span><br>
        <label>Email: <input type="text" id="email"></label>
        <span class="error" id="emailError"></span><br>
        <label>Password: <input type="password" id="password"></label>
        <span class="error" id="passwordError"></span><br>
        <button type="submit">Submit</button>
    </form>
    <p id="successMessage" class="success"></p>
    <script>
        function validateForm(event) {
            event.preventDefault();
            let errors = {};
            let successMessage = document.getElementById("successMessage");
            successMessage.textContent = "";
            
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            
            if (!name) errors.name = "Name is required";
            if (!email.includes("@") || !email.includes(".")) errors.email = "Invalid email";
            if (password.length < 5 || !password.match(/[#$%]/)) errors.password = "Password must be at least 5 characters and contain #, $, or %";
            
            let errorElements = {
                name: document.getElementById("nameError"),
                email: document.getElementById("emailError"),
                password: document.getElementById("passwordError")
            };
            
            for (let key in errorElements) {
                errorElements[key].textContent = errors[key] || "";
            }
            
            if (Object.keys(errors).length === 0) {
                successMessage.textContent = "Form submitted successfully!";
            }
        }
        document.getElementById("userForm").addEventListener("submit", validateForm);
    </script>
</body>
</html>

<!-- Exercise 2: Card Gallery with Navigation -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Gallery</title>
    <style>
        .gallery-container { display: flex; align-items: center; }
        .gallery { display: flex; width: 300px; overflow: hidden; }
        .card { min-width: 100px; margin: 5px; padding: 10px; border: 1px solid #000; text-align: center; }
        button { margin: 10px; }
    </style>
</head>
<body>
    <div class="gallery-container">
        <button id="prevBtn">&#10094;</button>
        <div class="gallery" id="gallery"></div>
        <button id="nextBtn">&#10095;</button>
    </div>
    <script>
        let cards = [
            { title: "Card 1" }, { title: "Card 2" }, { title: "Card 3" }, 
            { title: "Card 4" }, { title: "Card 5" }, { title: "Card 6" }
        ];
        let index = 0;
        let gallery = document.getElementById("gallery");

        function displayCards() {
            gallery.innerHTML = "";
            for (let i = index; i < index + 3; i++) {
                if (i < cards.length) {
                    let cardDiv = document.createElement("div");
                    cardDiv.className = "card";
                    cardDiv.textContent = cards[i].title;
                    gallery.appendChild(cardDiv);
                }
            }
        }
        
        function nextSlide() {
            index = (index + 3) % cards.length;
            displayCards();
        }
        function prevSlide() {
            index = (index - 3 + cards.length) % cards.length;
            displayCards();
        }
        document.getElementById("nextBtn").addEventListener("click", nextSlide);
        document.getElementById("prevBtn").addEventListener("click", prevSlide);
        
        window.onload = displayCards;
    </script>
</body>
</html>
