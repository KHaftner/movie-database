import React from "react";
import "../styles/NavSort.css";

function NavSort({ handleCategoryChange, selectedCategory }) {
	const handleClick = (newCategory) => {
		handleCategoryChange(newCategory);
	};

	const handleChange = (event) => {
		const newCategory = event.target.value;
		handleCategoryChange(newCategory);
	};

	return (
		<nav className="filter-nav">
			{/* Render the button-based navigation for larger screens */}
			<ul className="nav-list">
				<li>
					<button
						className={
							selectedCategory === "popular" ? "active" : ""
						}
						onClick={() => handleClick("popular")}
					>
						Popular
					</button>
				</li>
				<li>
					<button
						className={
							selectedCategory === "top_rated" ? "active" : ""
						}
						onClick={() => handleClick("top_rated")}
					>
						Top Rated
					</button>
				</li>
				<li>
					<button
						className={
							selectedCategory === "now_playing" ? "active" : ""
						}
						onClick={() => handleClick("now_playing")}
					>
						Now Playing
					</button>
				</li>
				<li>
					<button
						className={
							selectedCategory === "upcoming" ? "active" : ""
						}
						onClick={() => handleClick("upcoming")}
					>
						Upcoming
					</button>
				</li>
			</ul>

			{/* Render the select dropdown for smaller screens */}
			<select
				className="category-select"
				value={selectedCategory}
				onChange={handleChange}
			>
				<option value="popular">Popular</option>
				<option value="top_rated">Top Rated</option>
				<option value="now_playing">Now Playing</option>
				<option value="upcoming">Upcoming</option>
			</select>
		</nav>
	);
}

export default NavSort;

{
	/* I modified this slightly to test using a button instead to see if I can make a select drop-down list tomorrow for small screens to filter.  It might be easier this way, but the original code is below in case I mess something up and we need to go back to what worked before.  :)  


import { NavLink } from "react-router-dom";

function NavSort() {
	return (
		<nav className="filter-nav">
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
}  */
}
