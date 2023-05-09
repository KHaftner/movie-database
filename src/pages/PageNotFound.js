import { appTitle } from "../globals/globalVariables";

const PageNotFound = () => {
	document.title = `${appTitle} - Page Not Found`;
	// To do: update URL with page-not-found
	return (
		<section>
			<h2>Page Not Found placeholder</h2>
		</section>
	);
};
export default PageNotFound;
