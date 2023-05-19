import React from "react";
import bannerImage from "../images/banner-image.jpg";
import "../styles/SingleMovie.css";
import { appTitle } from "../globals/globalVariables";
import MovieInfo from "./MovieInfo";

const IndividualMovieLayout = ({ children }) => {
	return (
		<header className="page-header" id="single-movie-header">
			{children}
		</header>
	);
};

export default IndividualMovieLayout;
