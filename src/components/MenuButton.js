import React, { useState } from "react";

const MenuButton = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const handleButtonClick = () => {
		setMenuOpen(!isMenuOpen);
	};

	const handleButtonMouseDown = (e) => {
		e.preventDefault();
	};

	return (
		<button
			className={`hamburger-menu ${isMenuOpen ? "menu-on" : ""}`}
			id="btn-menu"
			onClick={handleButtonClick}
			onMouseDown={handleButtonMouseDown}
		>
			<span className="hamburger-menu-content" tabIndex="-1">
				<span className="screen-reader-text">Menu</span>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</span>
		</button>
	);
};

export default MenuButton;
