import "../styles/NavMain.css";
import { BASE_URL_POSTER } from "../globals/globalVariables";

const MovieList = (props) => {
	return (
		<>
			{props.movies.map( (movie, index) => (
				<div className="movie-container" key={movie.id}>
					{/* <p>{JSON.stringify(movie)}</p> */}
					<img src={`${BASE_URL_POSTER}${movie.poster_path}`} alt="movie"></img> 
				</div>
			))}
		</>
	);
};

export default MovieList;
