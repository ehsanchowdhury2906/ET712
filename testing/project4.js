body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
}

/* Outer container to center everything */
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh; /* Ensure full height centering */
}

/* Center the gallery itself */
.gallery-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Stack elements if needed */
    width: 80%;
    max-width: 900px;
    padding: 20px;
}

/* Use grid for even spacing and centering */
.card-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Ensure 4 cards in one row */
    gap: 20px;
    justify-content: center;
    align-items
