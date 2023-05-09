import { appTitle } from "../globals/globalVariables";


const PageContact = () => {

		document.title = `${appTitle} - Contact`;
		console.log(appTitle);
		
	return (
		<section>
			<h2>Contact Us</h2>
			 Do we need this? 
			 
			 If yes: replace with real email or alternate contact info.
			<p>
				Email us at: <a href="#0">very@realemail.com</a>
			</p>
		</section>
	);
}
export default PageContact;
