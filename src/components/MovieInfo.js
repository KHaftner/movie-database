import { BASE_URL_INDIVIDUAL_SIZE } from "../globals/globalVariables";
import { BASE_URL_ORIGINAL_SIZE } from "../globals/globalVariables";
import { appTitle } from "../globals/globalVariables";
import "../styles/SingleMovie.css";
import { Link } from "react-router-dom";
import FavButton from "./FavButton";

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

	const heroBackgroundStyle = {
		backgroundImage: `url(${BASE_URL_ORIGINAL_SIZE}${movie.poster_path})`,
	};

	document.title = `${appTitle} - ${movie.title}`;

	return (
		<>
			<section className="movie-info" key={movie.id}>
				<div className="single-movie-container">
					<div
						className="hero-background"
						style={heroBackgroundStyle}
					></div>
					<div className="movie-flex-container">
						<Link
							to={`${BASE_URL_ORIGINAL_SIZE}${movie.poster_path}`}
							target="_blank"
						>
							<img
								className="poster-image"
								src={`${BASE_URL_INDIVIDUAL_SIZE}${movie.poster_path}`}
								alt="movie"
							/>
						</Link>

						<div className="movie-details">
							<div className="single-movie-title-box">
								<p>
									<span>
										<strong>{movie.title}</strong>
									</span>
								</p>
							</div>
							<div className="movie-details-container">
								<p>
									<strong>Status</strong>: {movie.status}
								</p>
								<p>
									<strong>Release Date</strong>:<br />
									<em>{movie.release_date}</em>
								</p>
								<p>
									<strong>Average Rating</strong>:{" "}
									{movie.vote_average}
								</p>
								<p>
									<strong>Overview</strong>: {movie.overview}
								</p>
								<p>
									<strong>Budget</strong>: ${movie.budget}
								</p>
								<p>
									<strong>Revenue</strong>: ${movie.revenue}
								</p>
								<p>
									<strong>Genres</strong>:{" "}
								</p>
								<ul>{thisMovieGenres}</ul>
								<p>
									<strong>Runtime</strong>: {movie.runtime}{" "}
									minutes
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MovieInfo;
