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

function App() {
	return (
		<div className="App">
			<Header className="Page-header" />
			<NavMain />
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
			</main>

			<Footer className="footer" />
		</div>
	);
}

export default App;
