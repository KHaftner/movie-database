import { appTitle } from "../globals/globalVariables";
import PageMovies from "./PageMovies";

const PageHome = () => {
	document.title = `${appTitle} - Home Page`;
	return (
		<section className="home-page">
			<PageMovies />
		</section>
	);
};
export default PageHome;
