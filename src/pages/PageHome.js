import { appTitle } from "../globals/globalVariables";

const PageHome = () => {
	document.title = `${appTitle} - Home Page`;	
	return <section className="home-page">

	</section>;
}
export default PageHome;