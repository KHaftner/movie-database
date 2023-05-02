import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import NavMain from "../components/NavMain";
import SingleMovie from "../components/SingleMovie";
import FavButton from "../components/FavButton";
import PageContact from "../pages/PageContact";
import PageFavs from "../pages/PageFavs";
import PageHome from "../pages/PageHome";
import PageMovie from "../pages/PageMovie";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
return (

			<div className="wrapper">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<PageHome />} />
						<Route path="/contact" element={<PageContact />} />
						<Route path="/favs" element={<PageFavs />} />
						<Route
							path="/movie/id:<movie ID goes here>"
							element={<PageMovie />}
						/>
					</Routes>
				</main>

				<Main />
				<Footer />
			</div>
			
	);
}

export default AppRouter;