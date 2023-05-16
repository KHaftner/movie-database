import { BASE_URL_INDIVIDUAL_SIZE } from "../globals/globalVariables";
import { appTitle } from "../globals/globalVariables";

const MovieInfo = (props) => {
  const { movie } = props;

  return (
    <>
      <section className="movie-info">
        <div className="single-movie-container" key={movie.id}>
          <div className="medium-movie-poster">
            <img src={`${BASE_URL_INDIVIDUAL_SIZE}${movie.poster_path}`} alt="movie" />
          </div>

          <div className="movie-info">
            <div className="movie-title-box">
              <p><span><strong>{movie.title}</strong></span></p>
              <p>Status: {movie.status}</p>
            </div>
            <p>Release Date:<br /><em>{movie.release_date}</em></p>
            <p>Average Rating: <strong>{movie.vote_average}</strong></p>
            <p>Overview: {movie.overview}</p>
            <p>Budget: ${movie.budget}</p>
            <p>Revenue: ${movie.revenue}</p>
            {/* <p>Genres: {movie.genres (array with genre id and genre name )}</p> */}
            <p>Runtime: {movie.runtime} minutes</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieInfo;
