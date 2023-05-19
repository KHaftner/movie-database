// this is where movies from local storage will be displayed
// it will follow the structure of PageMovies.js except with no filterChoice

import { useParams } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";
import React, { useEffect, useState, useContext } from "react";
import MovieList from "../components/MovieList";
import "../styles/MovieList.css";
import FavButton from "../components/FavButton";
import FavouritesLayout from "../components/FavouritesLayout";
import { FavListContext } from "../components/context/Context";

const PageFavourites = () => {
	document.title = `${appTitle} - Favourites`;
	const [favList, setFavList] = useContext(FavListContext);
	// console.log(FavouriteMovies);

	if (favList) {
		return (
			<section className="movies-page">
				<FavouritesLayout />
				<div className="favourites-middle">
					<p>
						This page is where all your <strong>favourite</strong>{" "}
						movies are stored! &hearts;
					</p>
					<p>Let's make some popcorn and watch an old fave!</p>
				</div>
				<div className="favourite-movie-container">
					<MovieList movies={favList} />
				</div>
			</section>
		);
	} else {
		return (
			<section className="movies-page">
				<FavouritesLayout />
				<p>
					Sorry, no movies stored in your favourites! Let's make this
					message better...
				</p>
			</section>
		);
	}
};

export default PageFavourites;
