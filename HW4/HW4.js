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

<h3>Exercise 2</h3>
<style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f4f4f4;
    }
    .gallery-container {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 80%;
    }
    .card-gallery {
      display: flex;
      transition: transform 0.3s ease;
    }
    .card {
      background-color: #fff;
      border-radius: 8px;
      margin: 0 10px;
      width: 200px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      text-align: center;
    }
    .card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    .card h3 {
      font-size: 1.2em;
      margin: 10px 0;
    }
    .card p {
      padding: 0 10px;
      font-size: 0.9em;
      color: #666;
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
    .nav-buttons {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
    }
    .nav-buttons button {
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
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
    <div class="card-gallery">
      <!-- Card 1 -->
      <div class="card">
        <img src="https://via.placeholder.com/200x150" alt="Image 1">
        <h3>Card 1</h3>
        <p>This is a description of card 1.</p>
        <a href="#">Learn more</a>
      </div>
      <!-- Card 2 -->
      <div class="card">
        <img src="https://via.placeholder.com/200x150" alt="Image 2">
        <h3>Card 2</h3>
        <p>This is a description of card 2.</p>
        <a href="#">Learn more</a>
      </div>
      <!-- Card 3 -->
      <div class="card">
        <img src="https://via.placeholder.com/200x150" alt="Image 3">
        <h3>Card 3</h3>
        <p>This is a description of card 3.</p>
        <a href="#">Learn more</a>
      </div>
      <!-- Card 4 -->
      <div class="card">
        <img src="https://via.placeholder.com/200x150" alt="Image 4">
        <h3>Card 4</h3>
        <p>This is a description of card 4.</p>
        <a href="#">Learn more</a>
      </div>
      <!-- Card 5 -->
      <div class="card">
        <img src="https://via.placeholder.com/200x150" alt="Image 5">
        <h3>Card 5</h3>
        <p>This is a description of card 5.</p>
        <a href="#">Learn more</a>
      </div>
      <!-- Card 6 -->
      <div class="card">
        <img src="https://via.placeholder.com/200x150" alt="Image 6">
        <h3>Card 6</h3>
        <p>This is a description of card 6.</p>
        <a href="#">Learn more</a>
      </div>
    </div>
    <!-- Navigation buttons -->
    <div class="nav-buttons">
      <button id="prevBtn">&#10094;</button>
      <button id="nextBtn">&#10095;</button>
    </div>
  </div>

  <script>
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const gallery = document.querySelector('.card-gallery');
    const totalCards = 6;
    const cardsToShow = 3;
    let currentIndex = 0;

    // Update gallery transform based on current index
    function updateGalleryPosition() {
      gallery.style.transform = `translateX(-${(currentIndex * (100 / cardsToShow))}%)`;
    }

    // Handle Next Button Click
    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalCards - cardsToShow) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the first set of cards
      }
      updateGalleryPosition();
    });

    // Handle Previous Button Click
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalCards - cardsToShow; // Loop back to the last set of cards
      }
      updateGalleryPosition();
    });

    // Initial setup
    updateGalleryPosition();
  </script>
</body>
</html>
