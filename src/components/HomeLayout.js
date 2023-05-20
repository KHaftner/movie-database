import React from "react";
import bannerImage from "../images/banner-image.jpg";
import "../styles/Home.css";

const HomeLayout = ({ children }) => {
	return (
		<header className="page-header">
			<div className="h2-container">
				<h2>Home Page of the Movie Lovers</h2>
			</div>
			<img
				src={bannerImage}
				alt="An image of a group of friends laughing and watching a movie"
			/>
			{children}
		</header>
	);
};

export default HomeLayout;
