import React from "react";
import "../styles/SingleMovie.css";

const IndividualMovieLayout = ({ children }) => {
	return (
		<header className="page-header" id="single-movie-header">
			{children}
		</header>
	);
};

export default IndividualMovieLayout;
