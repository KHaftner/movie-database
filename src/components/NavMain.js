import "../styles/NavMain.css";

import { NavLink } from "react-router-dom";

function NavMain() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/favs">Favourites</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
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
