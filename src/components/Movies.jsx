function Movies({movies,handleMovieClick,IMG_BASE_URL}) {
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="list" key={movie.id} onClick={() => handleMovieClick(movie)}>
            <img
              className="image"
              src={`${IMG_BASE_URL}/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    );
}

export default Movies
