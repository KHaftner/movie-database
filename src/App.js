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
import PageMovies from "./pages/PageMovies";
import PageNotFound from "./pages/PageNotFound";
import MovieList from "./components/MovieList";
import React, { useEffect, useState } from "react";

function App() {


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
					{/* <Route path="/" element={<PageAbout />} /> */}
					<Route path="/contact" element={<PageContact />} />
					<Route path="/favs" element={<PageFavs />} />
					<Route path="/movie/:id" element={<PageMovie />} />
					<Route path="/movies/:filter/:page" element={<PageMovies />} />
					<Route path="*" element={<PageNotFound />} />

				</Routes>

				<div className="container movie-app">
					<div className="row">
						<p>
							( Filter goes above the movies, somewhere around
							here... Popular, Top Rated, Now Playing, Upcoming )
						</p>
						<p>
							( Movies should show up here once we figure out this
							API stuff... )
						</p>

					</div>
				</div>
			</main>

			<Footer className="footer" />
		</div>
	);
}

export default App;
