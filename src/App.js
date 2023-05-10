import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NavMain from "./components/NavMain";
import NavSort from "./components/NavSort";
import PageAbout from "./pages/PageAbout";
import PageContact from "./pages/PageContact";
import PageFavs from "./pages/PageFavs";
import PageHome from "./pages/PageHome";
import PageMovie from "./pages/PageMovie";
import PageNotFound from "./pages/PageNotFound";
import MovieList from "./components/MovieList";
import React, { useEffect, useState } from "react";

function App() {

	const [movies, setMovies] = useState([]);

	const getUsTheMovies = async () => {
		const popular = "https://api.themoviedb.org/3/movie/popular?api_key=cc622192f2417beca927f1e14b1278dd";
		const response = await fetch(popular);
		const responseJSON = await response.json();
		
		console.log(responseJSON.results);
		setMovies(responseJSON.results);
	};

	useEffect( () => {
		getUsTheMovies();

	}, []);

	return (
		<div className="App">
			<Header className="Page-header" />

			<NavSort />

			<header className="page-header">
				<h2>Home Page of the Movie Lovers</h2>
			</header>

			<main>
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/" element={<PageAbout />} />
					<Route path="/contact" element={<PageContact />} />
					<Route path="/favs" element={<PageFavs />} />
					<Route path="/movie/:id" element={<PageMovie />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>

				<div className="container movie-app">
					<div className="row">
						<p>( Filter goes above the movies, somewhere around here... Popular, Top Rated, Now Playing, Upcoming )</p>
						<p>( Movies should show up here once we figure out this API stuff... )</p>
						<MovieList movies={movies} />
					</div>
				</div>

			</main>

			<Footer className="footer" />
		</div>
	);
}

export default App;
