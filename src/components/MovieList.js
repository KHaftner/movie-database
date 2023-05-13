import "../styles/MovieList.css";
import { BASE_URL_POSTER } from "../globals/globalVariables";
import FavButton from "./FavButton";

const MovieList = (props) => {
	return (
		<>
			<section className="all-movies">
				{props.movies.map( (movie, index) => (
					<div className="movie-container" key={movie.id}>
					{/* <p>{JSON.stringify(movie)}</p> */}
						<div className="hover-container">
							<div className="movie-poster">
								<img src={`${BASE_URL_POSTER}${movie.poster_path}`} alt="movie"></img>
								<div className="overlay">
									<div className="overlay-text"><p>Insert Overview (?) here. If so, needs to have a maxLength set.</p></div>
									{/* toggle heart based on whether the movie is in favsArray*/}
									<FavButton movie={movie} />

								</div>
							</div>
						</div>

						<div className="movie-info">
							<div className="movie-title-box">
								<p><span><strong>{movie.title}</strong></span></p> 
							</div>
								<p>Release Date:<br /><em>{movie.release_date}</em></p>
								<p>Average Rating: <strong>{movie.vote_average}</strong></p>
						</div>
					</div>
				))}
			</section>
		</>
	);
};

export default MovieList;
