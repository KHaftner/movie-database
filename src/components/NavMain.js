import "../styles/NavMain.css";
import { NavLink } from "react-router-dom";

function NavMain() {
	return (
		<div>
 
			<nav className="site-navigation" id="site-navigation">
				<ul className="nav-list" id="nav-list">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/favs">Favourites</NavLink>
					</li>
				</ul>
			</nav>

		</div>
	);
}

export default NavMain;
