import React from "react";
import "../styles/About.css";

const AboutLayout = ({ children }) => {
	return (
		<header className="page-header" id="about-header">
			<div className="about-h2-container">
				<h2 id="about-h2">About Our Project</h2>
			</div>
			{children}
		</header>
	);
};

export default AboutLayout;
