import React, { useState } from "react";
import Form from "./Form";
import GoogleAuth from "./components/GoogleAuth";
import "./App.css";

function App() {
	const [isSignedIn, setIsSignedIn] = useState(null);

	const handleAuth = (input) => {
		setIsSignedIn(input);
	};

	const handleSubmit = (e, input) => {
		e.preventDefault();

		// Do stuff with input.
		var values = Object.values(input);
		var valueRangeBody = { values: [values] };
		renderUpdateSpreadSheet(valueRangeBody);
	};

	const renderUpdateSpreadSheet = (valueRangeBody) => {
		if (isSignedIn) {
			// Render spreadsheet logic here.
			const SPREADSHEET_ID = "1TSdM4lR9J6ySRz7yc8yH2sqEe089apvH9Q-IExvKMRA";

			var params = {
				spreadsheetId: SPREADSHEET_ID,
				range: "Sheet1",
				valueInputOption: "RAW",
				insertDataOption: "INSERT_ROWS",
			};

			var request = window.gapi.client.sheets.spreadsheets.values.append(
				params,
				valueRangeBody
			);

			request.then(
				function (response) {
					console.log(response.result);
				},
				function (reason) {
					console.error("Error: " + reason.result.error.message);
				}
			);
		}
	};
	return (
		<div>
			<GoogleAuth handleAuth={handleAuth} isSignedIn={isSignedIn} />
			<Form handleSubmit={handleSubmit} />
		</div>
	);
}

export default App;
