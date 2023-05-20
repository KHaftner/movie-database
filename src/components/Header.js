import "../styles/Header.css";
import logo from "../movie-love.png";
import NavMain from "./NavMain";

function Header() {
	return (
		<header className="site-header">
			<div className="logo-and-header">
				<a href="/">
					<img
						className="the-logo"
						src={logo}
						alt="Movie Love Logo - home page"
					/>
					<h1>Movie Love</h1>
				</a>
			</div> 
			<NavMain />
		</header>
	);
}

export default Header;
