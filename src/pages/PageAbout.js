import { appTitle } from "../globals/globalVariables";

const PageAbout = () => {
	document.title = `${appTitle} - About`;
	return (
		<section className="about">
			<p>
				{" "}
				actual content about the app here with references to TMDB and
				how we're students maybe
			</p>
		</section>
	);
};
export default PageAbout;
