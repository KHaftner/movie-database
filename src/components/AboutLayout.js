import React from "react";
import bannerImage5 from "../images/banner-image-5.jpg";
import "../styles/About.css";

const AboutLayout = ({ children }) => {
	return (
		<header className="page-header" id="about-header">
			<div className="about-container">
				<h2 id="about-h2">About Our Project</h2>
			</div>
			<img
				src={bannerImage5}
				alt="Popcorn spilled from its container in the shape of a heart"
			/>
			{children}
		</header>
	);
};

export default AboutLayout;
