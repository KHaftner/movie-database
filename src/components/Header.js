import "../styles/Header.css";
import logo from "../movie-love.png";
import NavMain from "./NavMain";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="site-header">
			<div className="logo-and-header">
				<NavLink to="/">
					<img
						className="the-logo"
						src={logo}
						alt="Movie Love Logo - home page"
					/>
					<h1>Movie Love</h1>
					</NavLink>
			</div>
			<NavMain />
		</header>
	);
}

export default Header;
