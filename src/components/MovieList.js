import "../styles/MovieList.css";
import { BASE_URL_POSTER } from "../globals/globalVariables";
import FavButton from "./FavButton";
import { Link, useLocation } from "react-router-dom";
import TextLimit from "../components/TextLimit";

const MovieList = (props) => {
	const location = useLocation();
	const isFavsPage = location.pathname === "/favs";

	const getLinkPath = (movie) => {
		if (isFavsPage) {
			// Remove 'favs/' from the current URL path to prevent the link from messing up when clicking for more details on posters on that page.
			const pathWithoutFavs = location.pathname.replace("/favs", "");
			return `${pathWithoutFavs}/movie/${movie.id}`;
		} else {
			return `movie/${movie.id}`;
		}
	};

	return (
		<>
			<section className="all-movies">
				{props.movies.map((movie, index) => (
					<div className="movie-container" key={movie.id}>
						<div className="hover-container">
							<div className="movie-poster">
								<img
									src={`${BASE_URL_POSTER}${movie.poster_path}`}
									alt="movie"
								></img>
								<div className="overlay">
									<div className="overlay-text">
										<p>
											<TextLimit
												text={movie.overview}
												limit={125}
											/>
										</p>
										<Link to={getLinkPath(movie)}>
											<p className="view-details">
												View Details
											</p>
										</Link>
									</div>
									<FavButton movie={movie} />
								</div>
							</div>
						</div>

						<div className="movie-info">
							<div className="movie-title-box">
								<p>
									<span>
										<strong>{movie.title}</strong>
									</span>
								</p>
							</div>
							<p>
								<strong>Release Date:</strong>
								<br />
								<em>{movie.release_date}</em>
							</p>
							<p>
								<strong>Original Language: </strong>
								<em>
									{`${movie.original_language
										.toUpperCase()
										.replace(/_/g, " ")}`}
								</em>
							</p>
							<p>
								<span
									className="rating"
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
									)}
									%
								</span>
							</p>
						</div>
					</div>
				))}
			</section>
		</>
	);
};

export default MovieList;
