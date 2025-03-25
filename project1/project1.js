
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
        document.getElementById('robtBtn').addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
            showImage();
        });

        // Next button click event
        document.getElementById('carbtn').addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length; // Loop to the first image
            showImage();
        });
    </script>
</body>
</html>
