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
import bannerImage from "./images/banner-image.jpg";

function App() {


	return (
		<div className="App">

			<Header className="Page-header" />
			
				<header className="page-header">
					<div class="h2-container">
						<h2>Home Page of the Movie Lovers</h2>
					</div>
					<img src={bannerImage} alt="An image of a group of friends laughing and watching a movie" />
				</header>

			<NavSort />

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

				{ /*

				<div className="container movie-app">
					<div className="row">

					</div>
				</div>

				*/}

			</main>

			<Footer className="footer" />
		</div>
	);
}

export default App;
