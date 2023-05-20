import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { APP_FOLDER_NAME } from "./globals/globalVariables";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter basename={`/${APP_FOLDER_NAME}`}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
