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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Gallery</title>
    <style>
        /* Centering and basic page styling */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }

        /* Container holding the gallery */
        .gallery-container {
            position: relative;
            width: 80%; /* Set width to 80% for more space */
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* The sliding gallery */
        .card-gallery {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        /* Individual card styling */
        .card {
            background-color: #fff;
            border-radius: 8px;
            margin: 0 20px; /* Add margin between cards */
            width: 200px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            text-align: center;
            padding: 15px;
        }

        .card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-bottom: 2px solid #ddd;
        }

        .card h3 {
            font-size: 1.2em;
            margin: 10px 0;
        }

        .card p {
            font-size: 0.9em;
            color: #666;
            padding: 0 10px;
        }

        .card a {
            display: block;
            margin: 10px 0;
            color: #007bff;
            text-decoration: none;
        }

        .card a:hover {
            text-decoration: underline;
        }

        /* Navigation buttons */
        .nav-buttons {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            top: 50%;
        }

        .nav-buttons button {
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 50%;
            font-size: 18px;
        }

        .nav-buttons button:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

    </style>
</head>
<body>

    <div class="gallery-container">
        <!-- Left navigation button -->
        <div class="nav-buttons">
            <button id="prevBtn">&#10094;</button>
        </div>

        <!-- Gallery Wrapper -->
        <div class="card-gallery" id="gallery">
            <!-- Manually adding 6 cards -->
            <div class="card">
                <img src="https://via.placeholder.com/200x150" alt="Image 1">
                <h3>Card 1</h3>
                <p>This is a description of card 1.</p>
                <a href="#">Learn more</a>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200x150" alt="Image 2">
                <h3>Card 2</h3>
                <p>This is a description of card 2.</p>
                <a href="#">Learn more</a>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200x150" alt="Image 3">
                <h3>Card 3</h3>
                <p>This is a description of card 3.</p>
                <a href="#">Learn more</a>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200x150" alt="Image 4">
                <h3>Card 4</h3>
                <p>This is a description of card 4.</p>
                <a href="#">Learn more</a>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200x150" alt="Image 5">
                <h3>Card 5</h3>
                <p>This is a description of card 5.</p>
                <a href="#">Learn more</a>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/200x150" alt="Image 6">
                <h3>Card 6</h3>
                <p>This is a description of card 6.</p>
                <a href="#">Learn more</a>
            </div>
        </div>

        <!-- Right navigation button -->
        <div class="nav-buttons">
            <button id="nextBtn">&#10095;</button>
        </div>
    </div>

    <script>
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

    </script>

</body>
</html>
