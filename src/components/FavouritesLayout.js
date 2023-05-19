import React from "react";
import bannerImage3 from "../images/banner-image-3-crop.jpg";
import "../styles/Favourites.css";

const FavouritesLayout = ({ children }) => {
  return (
<header className="page-header" id="favourites-header">
    <div className="favourites-container">
        <h2 id="favourites-h2">Your Favourite Movies</h2>
	</div>
    <img
		src={bannerImage3}
		alt="Several hands reaching into a popcorn bowl"
	/>
    {children}
</header>
  );
};

export default FavouritesLayout;