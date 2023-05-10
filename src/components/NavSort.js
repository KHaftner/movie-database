import "../styles/NavSort.css";
import { NavLink } from "react-router-dom";

function NavSort() {
	return (
		<nav>
			{/* commented out UL is from class 9 example */}
			<ul>
				<li>
					<NavLink to="/movies/popular/1">Popular</NavLink>
				</li>
				<li>
					<NavLink to="/movies/top_rated/1">
						Top Rated
					</NavLink>
				</li>
				<li>
					<NavLink to="/movies/now_playing/1">Now Playing</NavLink>
				</li>
				<li>
					<NavLink to="/movies/upcoming/1">Upcoming</NavLink>
				</li>
			</ul>
		</nav>
	);
}
export default NavSort;
