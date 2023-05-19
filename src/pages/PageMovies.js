import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";
import MovieList from "../components/MovieList";
import "../styles/MovieList.css";
import FavButton from "../components/FavButton";
import HomeLayout from "../components/HomeLayout";
import NavSort from "../components/NavSort";

const PageMovies = () => {
	const { filter = "popular", page } = useParams();
	document.title = `${appTitle}`;

	const [movies, setMovies] = useState([]);
	const [category, setCategory] = useState(filter);

	const getMovies = async () => {
		const filterChoice = `https://api.themoviedb.org/3/movie/${category}?api_key=cc622192f2417beca927f1e14b1278dd&language=en-US&page=${page}`;
		const response = await fetch(filterChoice);
		const responseJSON = await response.json();
		setMovies(responseJSON.results);
	};

	useEffect(() => {
		getMovies();
	}, [category, page]);

	const handleCategoryChange = (newCategory) => {
		setCategory(newCategory);
	};

	return (
		<section className="movies-page">
			<HomeLayout />
			<NavSort
				handleCategoryChange={handleCategoryChange}
				selectedCategory={category}
			/>
			<div className="filter-text">
				<h2 class="mobile-sort">
					Sort the movies to your heart's content!
				</h2>
				<h2 class="desktop-sort">{`${category
					.toUpperCase()
					.replace(/_/g, " ")}`}</h2>
				<p>
					<em>
						Scroll right to view all of the movies in the{" "}
						<strong>{`${category.replace(/_/g, " ")}`}</strong>{" "}
						section.
					</em>
				</p>
			</div>
			<MovieList movies={movies} />
		</section>
	);
};
export default PageMovies;

{
	/*

I modified this slightly to test using a button instead to see if I can make a select drop-down list tomorrow for small screens to filter.  It might be easier this way, but the original code is below in case I mess something up and we need to go back to what worked before.  :) 

import { useParams } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";
import MovieList from "../components/MovieList";
import React, { useEffect, useState } from "react";
import "../styles/MovieList.css";
import FavButton from "../components/FavButton";
import HomeLayout from "../components/HomeLayout";
import NavSort from "../components/NavSort";

const PageMovies = () => {
	const { filter = "popular", page } = useParams(); // Set "popular" as the default value for filter
	document.title = `${appTitle} - ${filter.toUpperCase().replace(/_/g, " ")}`;
	
		// page ${page} 
	
	const [movies, setMovies] = useState([]);

	const getUsTheMovies = async () => {
		// const filterChoice = `https://api.themoviedb.org/3/movie/${filter}?api_key=cc622192f2417beca927f1e14b1278dd&language=en-US`;

		// VARIANT of filter choice, to add pagination:
		const filterChoice = `https://api.themoviedb.org/3/movie/${filter}?api_key=cc622192f2417beca927f1e14b1278dd&language=en-US&page=${page}`;

	
			// &page=${page}
	
		const response = await fetch(filterChoice);
		const responseJSON = await response.json();

		// console.log(responseJSON.results);
		setMovies(responseJSON.results);
	};

	useEffect(() => {
		getUsTheMovies();
	}, [filter, page]);

	return (
		<section className="movies-page">
			<HomeLayout />
			<NavSort />
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


*/
}
