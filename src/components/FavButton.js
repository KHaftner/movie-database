const FavButton = (props) => {
	return (
		<>
			<span className="mr-2">Add to Favourites</span>
			{/* temporarily made a crappy button fav, will figure out heart or better button part later */}
			<button
				onClick={() => {

					let clickedOnMovie = props.movie;
					let clickedOnMovieID = props.movie.id;
					let oldFavListStr = localStorage.getItem("FavList");

					if (localStorage.getItem("FavList") != undefined) {
						let favList = JSON.parse(oldFavListStr);
						console.log(favList);

						if (
							favList.findIndex(
								(item) => item.id == clickedOnMovieID
							) != -1
						) {
							let unFavIndex = favList.findIndex(
								(item) => item.id == clickedOnMovieID
							);
							console.log("in list: ");
							console.log(unFavIndex);
							favList.splice(unFavIndex, 1);
							localStorage.setItem(
								"FavList",
								JSON.stringify(favList)
							);

						} else {
							// console.log(oldFavList);
							favList.push(clickedOnMovie);
							console.log(favList);
							localStorage.setItem(
								"FavList",
								JSON.stringify(favList)
							);
						}
					} else {
						console.log(
							"this message happens when FavList is first created"
						);
						localStorage.setItem(
							"FavList",
							JSON.stringify([props.movie])
						);
					}
					let test = localStorage.getItem("FavList");
				}}
			>
				FAV
			</button>

			{/* // I'll come back to this to see if we can fill/unfill the heart based on fav status
			<svg
				clipRule="evenodd"
				fillRule="evenodd"
				strokeLinejoin="round"
				strokeMiterlimit="2"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				className="heart-toggle"
				fill="white"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
					fillRule="nonzero"
				/>
			</svg> */}
		</>
	);
};
export default FavButton;
