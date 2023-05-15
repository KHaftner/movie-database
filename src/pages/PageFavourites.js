// this is where movies from local storage will be displayed
// it will follow the structure of PageMovies.js except with no filterChoice

import { useParams } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";
import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import "../styles/MovieList.css";
import FavButton from "../components/FavButton";
import FavouritesLayout from "../components/FavouritesLayout";

const PageFavourites = () => {
	document.title = `${appTitle} - Favourites`;
	const [movies, setMovies] = useState([]);
	const FavouriteMovies = JSON.parse(localStorage.getItem("FavList"));
	// console.log(FavouriteMovies);

	if (FavouriteMovies) {
		return (
			<section className="movies-page">
				<FavouritesLayout />
				<div className="favourite-movie-container">
					<MovieList movies={FavouriteMovies} />
				</div>
			</section>
		);
	}else{
        return (
            <section className="movies-page">
				<FavouritesLayout />
                <p>Sorry, no movies stored in your favourites! Let's make this message better...</p>
            </section>
        )
    }
};

export default PageFavourites;
