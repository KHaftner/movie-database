import { useParams } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";

const PageMovie = () => {
	const { id } = useParams();
	document.title = `${appTitle} - <this should be the movie title>`;
	return (
		<section className="single-movie-page">
			<h2>Single Movie {id}</h2>
		</section>
	);
};
export default PageMovie;