import EmptyHeartIcon from "./EmptyHeartIcon";
import FilledHeartIcon from "./FilledHeartIcon";
import React, { createContext, useContext } from "react";
import { FavListContext } from "../components/context/Context";
import "../styles/HeartIcon.css";

const FavButton = (props) => {
	let clickedOnMovie = props.movie;
	let clickedOnMovieID = props.movie.id;
	const [favList, setFavList] = useContext(FavListContext);

	if (favList != undefined) {
		// console.log(favList);

		if (favList.findIndex((item) => item.id == clickedOnMovieID) != -1) {
			return (
				<div className="favButton">
					{/* <span className="mr-2">Remove from Favourites</span> */}
					<FilledHeartIcon
						className="fav-toggle fav-toggle-off"
						onClick={() => {
							let unFavIndex = favList.findIndex(
								(item) => item.id == clickedOnMovieID
							);
							console.log("in list: ");
							// console.log(unFavIndex);
							setFavList(favList.toSpliced(unFavIndex, 1));
						}}
					></FilledHeartIcon>
				</div>
			);
		} else {
			return (
				<div className="favButton">
					{/* <span className="mr-2">Add to Favourites</span> */}
					<EmptyHeartIcon
						// role="img"
						// aria-labelledby="emptyHeartIcon"
						className="fav-toggle fav-toggle-on"
						onClick={() => {
							favList.push(clickedOnMovie);
							// console.log(favList);
							setFavList(Array.from(favList));
						}}
					>
						{/* <EmptyHeartIcon /> */}
					</EmptyHeartIcon>
				</div>
			);
		}
	} else {
		console.log("this message happens when FavList is first created");
		setFavList([props.movie]);
	}
};
export default FavButton;
