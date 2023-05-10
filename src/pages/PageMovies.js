import { useParams } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";
import MovieList from "../components/MovieList";
import React, { useEffect, useState } from "react";

const PageMovies = () => {
	const { filter, page } = useParams();
	document.title = `${appTitle} - ${filter} page ${page}`;
	const [movies, setMovies] = useState([]);

	const getUsTheMovies = async () => {
		const filterChoice = `https://api.themoviedb.org/3/movie/${filter}?api_key=cc622192f2417beca927f1e14b1278dd&language=en-US&page=${page}`
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
			<h2>{filter}</h2>
			<p>Page: {page}</p>
			<MovieList movies={movies} />
		</section>
	);
};
export default PageMovies;
