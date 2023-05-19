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
	let movieGenres = [];
	let thisMovieGenres = [];
	for (let index = 0; index < genreArray.length; index++) {
		const movieGenre = genreArray[index];
		movieGenres.push(movieGenre.name);
		thisMovieGenres = movieGenres.map((oneGenre) => (
			<li key={oneGenre}>{oneGenre}</li>
		));
	}

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
								<div className="favourite-single-movie">
									<p>Add to your favourites?</p>
									<FavButton movie={movie} />
								</div>
								<p>
									<strong>Status:</strong> {movie.status}
								</p>
								<p>
									<strong>Release Date:</strong>
									<br />
									<em>{movie.release_date}</em>
								</p>
								<p>
									<span
										className="rating-movie"
										style={{
											backgroundColor:
												movie.vote_average < 4
													? "#fb7a7a"
													: movie.vote_average < 6
													? "#fab285"
													: movie.vote_average < 7
													? "#fff5a0"
													: "#9aeaa0",
										}}
									>
										{Math.round(
											(movie.vote_average / 10) * 100
										)}{" "}
										%
									</span>
								</p>
								<p>
									<strong>Overview:</strong> {movie.overview}
								</p>
								<p>
									<strong>Budget:</strong> ${movie.budget}
								</p>
								<p>
									<strong>Revenue:</strong> ${movie.revenue}
								</p>
								<p>
									<strong>Genres:</strong>{" "}
									<ul>{thisMovieGenres}</ul>
								</p>
								<p>
									<strong>Runtime:</strong> {movie.runtime}{" "}
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
