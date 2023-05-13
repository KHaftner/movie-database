import { useParams } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";
import MovieList from "../components/MovieList";
import React, { useEffect, useState } from "react";
import "../styles/MovieList.css";
import FavButton from "../components/FavButton";

const PageMovies = () => {
	const { filter, page } = useParams();
	document.title = `${appTitle} - ${filter.toUpperCase().replace(/_/g, " ")}`;
	{
		/* page ${page} */
	}
	const [movies, setMovies] = useState([]);

	const getUsTheMovies = async () => {
		// const filterChoice = `https://api.themoviedb.org/3/movie/${filter}?api_key=cc622192f2417beca927f1e14b1278dd&language=en-US`;

		// VARIANT of filter choice, to add pagination:
		const filterChoice = `https://api.themoviedb.org/3/movie/${filter}?api_key=cc622192f2417beca927f1e14b1278dd&language=en-US&page=${page}`;

		{
			/* Code I tried to add below doesn't work... I'm trying to set the home page to load a filter by default and not just if it's clicked.  Brain too tired right now, lol... Maybe we use those default props things?  Maybe you will know what to do. :)
		
		let filterChoice = "";
		if (filter) {
			filterChoice = `https://api.themoviedb.org/3/movie/${filter}?api_key=cc622192f2417beca927f1e14b1278dd&language=en-US`;
		} else {
			filterChoice = `https://api.themoviedb.org/3/movie/popular?api_key=cc622192f2417beca927f1e14b1278dd&language=en-US`;
		}
		*/
		}

		{
			/*&page=${page}*/
		}
		const response = await fetch(filterChoice);
		const responseJSON = await response.json();

		console.log(responseJSON.results);
		setMovies(responseJSON.results);
	};

	useEffect(() => {
		getUsTheMovies();
	}, [filter, page]);

	return (
		<section className="movies-page">
			<div className="filter-text">
				<h2>{`${filter.toUpperCase().replace(/_/g, " ")}`}</h2>
				<p>
					<em>
						Scroll right to view all of the movies in the{" "}
						<strong>{`${filter.replace(/_/g, " ")}`}</strong>{" "}
						section.
					</em>
				</p>
			</div>
			<MovieList movies={movies} />
		</section>
	);
};
export default PageMovies;
