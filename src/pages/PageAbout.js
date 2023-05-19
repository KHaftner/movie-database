import { appTitle } from "../globals/globalVariables";
import AboutLayout from "../components/AboutLayout";
import tmdbLogo from "../images/tmdb-logo.png";
import undrawHeart from "../images/undraw-heart.svg";

const PageAbout = () => {
	document.title = `${appTitle} - About`;
	return (
		<section className="about">
			<AboutLayout />
			<div className="about-text-container">
				<p><strong>Welcome to Movie Love!</strong></p>
				<p>Movie Love is a movie database listing movies based on their popularity, rating, and date of release. Another cool thing you can do is add a movie to your favourite movies list by clicking on the heart icon.</p>
				<p>This React JS project was created by Kassandra Haftner and Amy Turton as part of the Front-End Web Developer program at BCIT. We love to code! &hearts;</p>
				<p><em><strong>Please Note</strong></em>: This product uses the TMBb API, but it is not endorsed or certified by TMDb.</p>
					<img src={tmdbLogo} alt="TMDB's Logo" className="tmdb-logo" />
			</div>
			<img src={undrawHeart} alt="A cartoon image of a girl holding a heart" className="cartoon-heart" />
		</section>
	);
};
export default PageAbout;
