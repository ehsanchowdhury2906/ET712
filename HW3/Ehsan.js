/* 
Ehsan chowdhury

Homework 3 – Objects and exception handling in JS 
*/  

class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}`;
    }
}

class MovieCollection {
    constructor() {
        this.movies = []; 
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    removeMovie(title) {
        try {
            const index = this.movies.findIndex(movie => movie.title === title);
            if (index === -1) {
                throw new Error(`Movie with title "${title}" not found.`);
            }
            this.movies.splice(index, 1);
            console.log(`Movie "${title}" successfully removed.`);
        } catch (err) {
            console.error(err.message);
        }
    }

    showMovies() {
        try {
            if (this.movies.length === 0) {
                throw new Error("No movies in the collection.");
            }
            console.log("Movie Collection:");
            this.movies.forEach(movie => console.log(movie.getDetails()));
        } catch (err) {
            console.error(err.message);
        }
    }
}

const movieA = new Movie("The Batman", "Matt Reeves", 2022);
const movieB = new Movie("Joker", "Todd Phillips", 2019);
const movieC = new Movie("Avengers: Endgame", "Anthony and Joe Russo", 2019);

const myCollection = new MovieCollection();

myCollection.addMovie(movieA);
myCollection.addMovie(movieB);
myCollection.addMovie(movieC);

myCollection.showMovies(); 

myCollection.removeMovie("Joker");
myCollection.removeMovie("The Batman");

const emptyCollection = new MovieCollection();
emptyCollection.showMovies();
