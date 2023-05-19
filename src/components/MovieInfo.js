import { BASE_URL_INDIVIDUAL_SIZE } from "../globals/globalVariables";
import { appTitle } from "../globals/globalVariables";

const MovieInfo = (props) => {
	const { movie } = props;
	// for each item (object) in array genreArray do object stuff
	const genreArray = movie.genres;
	// console.dir(movie);
	let movieGenres = [];
	let thisMovieGenres = [];
	for (let index = 0; index < genreArray.length; index++) {
		const movieGenre = genreArray[index];
		// console.log(movieGenre.name);
		movieGenres.push(movieGenre.name);
		thisMovieGenres = movieGenres.map((oneGenre) => (
			<li key={oneGenre}>{oneGenre}</li>
		));
	}
	// console.log(movieGenres);

	return (
		<>
			<section className="movie-info">
				<div className="single-movie-container" key={movie.id}>
					<div className="medium-movie-poster">
						<img
							src={`${BASE_URL_INDIVIDUAL_SIZE}${movie.poster_path}`}
							alt="movie"
						/>
					</div>

					<div className="movie-info">
						<div className="movie-title-box">
							<p>
								<span>
									<strong>{movie.title}</strong>
								</span>
							</p>
							<p>Status: {movie.status}</p>
						</div>
						<p>
							Release Date:
							<br />
							<em>{movie.release_date}</em>
						</p>
						<p>
							Average Rating:{" "}
							<strong>{movie.vote_average}</strong>
						</p>
						<p>Overview: {movie.overview}</p>
						<p>Budget: ${movie.budget}</p>
						<p>Revenue: ${movie.revenue}</p>
						<p>Genres:</p>
						<ul>{thisMovieGenres}</ul>

						<p>Runtime: {movie.runtime} minutes</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default MovieInfo;
