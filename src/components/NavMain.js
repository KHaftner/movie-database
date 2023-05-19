import "../styles/NavMain.css";
import MenuButton from "../components/MenuButton";
import { NavLink } from "react-router-dom";

function NavMain() {

	return (
		<div>

			<MenuButton />
			
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

			{/* Not finished yet
      <div className="search-container">
        <form action="#">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit" input="Search"></button>
        </form>
      </div>
  */}
		</div>
	);
}

export default NavMain;
