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
        <img class="slider-images active" src="car.jpg" alt="Car Image">
        <img class="slider-images" src="robot.jpg" alt="Robot Image">
        
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
