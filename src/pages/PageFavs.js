import { appTitle } from "../globals/globalVariables";

const PageFavs = () => {
	document.title = `${appTitle} - Favourites`;
	return <section className="favourite-movies">Favourites</section>;
}
export default PageFavs;