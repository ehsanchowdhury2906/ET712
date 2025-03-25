<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Image Slider</title>
    <style>
        .slider-container {
            width: 100%;
            max-width: 500px;
            margin: auto;
            position: relative;
        }
        .slider-images {
            width: 100%;
            display: none;
        }
        .slider-images.active {
            display: block;
        }
    </style>
</head>
<body>
    <div class="slider-container">
        <!-- Images -->
        <img class="slider-images active" src="https://static.vecteezy.com/system/resources/previews/006/893/283/large_2x/toy-car-isolated-on-white-background-free-photo.jpg" alt="Car">
        <img class="slider-images" src="https://images.unsplash.com/photo-1586458873452-7bdd7401eabd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95JTIwcm9ib3R8ZW58MHx8MHx8fDA%3D" alt="robot">
        
        <!-- Buttons -->
        <button id="prevBtn">Previous</button>
        <button id="nextBtn">Next</button>
    </div>

    <script>
        let currentIndex = 0; // Start on the first image
        const images = document.querySelectorAll('.slider-images');

        // Function to show the image based on the currentIndex
        function showImage() {
            // Hide all images
            images.forEach(image => image.classList.remove('active'));
            // Show the current image
            images[currentIndex].classList.add('active');
        }

        // Previous button click event
        document.getElementById('prevBtn').addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
            showImage();
        });

        // Next button click event
        document.getElementById('nextBtn').addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length; // Loop to the first image
            showImage();
        });
    </script>
</body>
</html>
