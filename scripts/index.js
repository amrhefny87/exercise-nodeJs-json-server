async function fetchMovies() {
    try {
        let response = await fetch('http://localhost:3000/movies');
        let movies = await response.json();
        return movies;
    } catch (error) {
        console.error("Error fetching: ", error);
    }
}

function arrayToString(array){
    let text = ""
    for(let i = 0; i < array.length; i++){
        if(i != 0){
            text += ", " 
        }
        text += array[i]
    }
    return text
}

function displayMovies(movies) {
    let containerDiv = document.getElementById("container")

    movies.forEach(movie => {
        let movieGenre = arrayToString(movie.genre)
        let movieCast = arrayToString(movie.cast)
    
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movieCard')
        movieDiv.innerHTML = `
            <img src='${movie.poster}' alt='${movie.title} Poster'>
            <h2>${movie.title}</h2>
            <p><strong>Release Year: </strong>${movie.release_year}</p>
            <p><strong>Cast: </strong>${movieCast}</p>
            <p><strong>Genre: </strong>${movieGenre}</p>
            <p><strong>Director: </strong>${movie.director}</p>
        `
        containerDiv.appendChild(movieDiv);
    })
}

(async function(){
    let moviesFetched = await fetchMovies();
    displayMovies(moviesFetched);
})();

