import { useParams } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";
import IndividualMovieLayout from "../components/IndividualMovieLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MovieInfo from "../components/MovieInfo";

const PageMovie = () => {
	let { id } = useParams();
	document.title = `${appTitle} - ${id.title}`;
	const [movie, setMovie] = useState();

	const getUsTheMovie = async () => {
		const idSelected = `https://api.themoviedb.org/3/movie/${id}?api_key=cc622192f2417beca927f1e14b1278dd&language=en-US`;

		const movieResponse = await fetch(idSelected);
		const responseMovieJSON = await movieResponse.json();

		console.log(responseMovieJSON);
		setMovie(responseMovieJSON);
	};

	useEffect(() => {
		getUsTheMovie();
	}, [id]);
	//
	if (movie) {
		return (
			<section className="single-movie-page">
				<IndividualMovieLayout />
				<MovieInfo movie={movie} />
			</section>
		);
	} else {
		return (
			<section className="single-movie-page">
				<p>Loading...</p>
			</section>
		);
	}
};
export default PageMovie;
