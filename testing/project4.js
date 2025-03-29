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
    width: 80%;
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* The card gallery */
.card-gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

/* Individual card styling */
.card {
    background-color: #fff;
    border-radius: 8px;
    width: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 15px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    
    /* Make the entire card clickable */
    display: block;
    text-decoration: none;
    color: inherit;
}

.card:hover {
    transform: scale(1.05);
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
