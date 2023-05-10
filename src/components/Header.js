import "../styles/Header.css";
import logo from "../movie-love.png";
import NavMain from "./NavMain";

function Header() {
	return (
		<header className="site-header">
			<div className="logo-and-header">
				<img src={logo} alt="Movie Love Logo" />
				<h1>Movie Love</h1>
			</div>
			<NavMain />
		</header>
	);
}

export default Header;