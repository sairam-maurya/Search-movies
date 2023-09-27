function MovieDetails({ selectedMovie }) {
  if (selectedMovie) {
    return (
      <div className="movie-details">
       
        <h2>{selectedMovie.title}</h2>
        <p>Overview: {selectedMovie.overview}</p>
        <p>Release Date: {selectedMovie.release_date}</p>
        <p>Average Rating: {selectedMovie.vote_average}</p>
      </div>
    );
  }
}

export default MovieDetails;
