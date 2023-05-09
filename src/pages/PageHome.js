import { appTitle } from "../globals/globalVariables";

const PageHome = () => {
	document.title = `${appTitle} - Home Page`;	
	return <section className="home-page">
		<h2>Home Page of the Movie Lovers</h2>
	</section>;
}
export default PageHome;