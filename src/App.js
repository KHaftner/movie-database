import "./styles/NormalizeFWD.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageAbout from "./pages/PageAbout";
import PageFavourites from "./pages/PageFavourites";
import PageHome from "./pages/PageHome";
import PageMovie from "./pages/PageMovie";
import PageMovies from "./pages/PageMovies";
import PageNotFound from "./pages/PageNotFound";
import React, { useEffect, useState } from "react";
import { FavListContext } from "./components/context/Context";

function App() {
	const localStorageState = useState(
		JSON.parse(localStorage.getItem("FavList"))
	);
	localStorage.setItem("FavList", JSON.stringify(localStorageState[0]));

	return (
		<FavListContext.Provider value={localStorageState}>
			<div className="App">
				<Header />

				<main id="main-content">
					<Routes>
						<Route path="/" element={<PageHome />} />
						<Route path="/about" element={<PageAbout />} />
						<Route path="/favs" element={<PageFavourites />} />
						<Route path="/movie/:id" element={<PageMovie />} />
						<Route
							path="/movies/:filter/:page"
							element={<PageMovies />}
						/>
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</main>

				<Footer className="footer" />
			</div>
		</FavListContext.Provider>
	);
}

export default App;
