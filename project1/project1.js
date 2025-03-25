<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <style>
        .slider-container {
            width: 100%;
            max-width: 500px;
            margin: auto;
            overflow: hidden;
            position: relative;
        }
        .slider-wrapper {
            display: flex;
            transition: transform 0.3s ease-in-out;
        }
        .slider-images {
            width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="slider-container">
        <div class="slider-wrapper">
            <img class="slider-images" src="car.jpg" alt="Car Image">
            <img class="slider-images" src="robot.jpg" alt="Robot Image">
        </div>
    </div>

    <script>
        const sliderWrapper = document.querySelector('.slider-wrapper');
        let isDragging = false;
        let startX;
        let scrollLeft;

        // When the mouse is down, start the dragging
        sliderWrapper.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - sliderWrapper.offsetLeft;
            scrollLeft = sliderWrapper.scrollLeft;
        });

        // When the mouse moves, drag the images
        sliderWrapper.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - sliderWrapper.offsetLeft;
            const walk = (x - startX) * 2;  // The '2' controls the speed of the sliding
            sliderWrapper.style.transform = `translateX(${scrollLeft - walk}px)`;
        });

        // When the mouse is released, stop dragging
        sliderWrapper.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // If the mouse leaves the slider, also stop dragging
        sliderWrapper.addEventListener('mouseleave', () => {
            isDragging = false;
        });
    </script>
</body>
</html>
