const apiKey = 'YOUR_API_KEY';
const movieList = document.getElementById('movieList');

function fetchNowPlayingMovies() {
  const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayMovies(data.results);
    })
    .catch(error => console.log('Error fetching data:', error));
}

function displayMovies(movies) {
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    movieItem.innerHTML = `
      <h2>${movie.title}</h2>
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <p>Language: ${movie.original_language}</p>
      <p>Rating: ${movie.vote_average}</p>
    `;
    movieList.appendChild(movieItem);
  });
}

fetchNowPlayingMovies();


function fetchGenres() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Handle genre data
      })
      .catch(error => console.log('Error fetching genres:', error));
  }
  
  fetchGenres();
  