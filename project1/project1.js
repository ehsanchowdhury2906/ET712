       let currentIndex = 0; 
        const images = document.querySelectorAll('.slider-images');

        
        function showImage() {
        
            images.forEach(image => image.classList.remove('active'));
            
            images[currentIndex].classList.add('active');
        }

        
        document.getElementById('robtBtn').addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length; 
            showImage();
        });

        document.getElementById('carbtn').addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length; 
            showImage();
