import React from "react";

function FilledHeartIcon(props) {
	return (
		<svg
			role="img"
			aria-labelledby="filledHeartIcon"
			viewBox="0 0 24 24"
			fill="currentColor"
			{...props}
		>
			{/* https://iconmonstr.com/favorite-11-svg/ */}
			<path d="M19.5 10c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-5v-1h5v1zm-6.527 4.593c-1.108 1.086-2.275 2.219-3.473 3.407-6.43-6.381-12-11.147-12-15.808 0-6.769 8.852-8.346 12-2.944 3.125-5.362 12-3.848 12 2.944 0 .746-.156 1.496-.423 2.253-1.116-.902-2.534-1.445-4.077-1.445-3.584 0-6.5 2.916-6.5 6.5 0 2.063.97 3.901 2.473 5.093z" />
			<title id="emptyHeartIcon">Remove from Favourites</title>
		</svg>
	);
}

export default FilledHeartIcon;

{
	/* Example of how to use this component: 
        import FilledHeartIcon from "../components/FilledHeartIcon";    
		<FilledHeartIcon className="to give it a fill colour" width="__px" height="__px" />
    */
}
