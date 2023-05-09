import { appTitle } from "../globals/globalVariables";

const PageAbout = () => {
	document.title = `${appTitle} - About`;
	return <section className="about">About</section>;
}
export default PageAbout;