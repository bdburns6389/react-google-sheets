import React from "react";

class GoogleAuth extends React.Component {
	// Array of API discovery doc URLs for APIs used by the quickstart
	DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

	componentDidMount() {
		// Initialize OAuth2 library.
		var CLIENT_ID =
			"162199839864-6f3mfc4eeg0ukl5a05cktrevie1l5fdu.apps.googleusercontent.com";
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					apiKey: "AIzaSyCRGMUcELLJ8paWzb67ORZs67bpqR73bDI",
					clientId: CLIENT_ID,
					scope: "email https://www.googleapis.com/auth/spreadsheets",
					discoveryDocs: this.DISCOVERY_DOCS,
				})
				.then(() => {
					// Promise that is called when init is sucessfully returned.
					this.auth = window.gapi.auth2.getAuthInstance();
					this.props.handleAuth(this.auth.isSignedIn.get());
					//this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});

		// Use gapi client to start OAuth flow.
	}

	// Get access token while signed in.
	// window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token

	// Get current user's id.
	// gapi.auth2.getAuthInstance().currentUser.get().getId();

	onAuthChange = () => {
		this.props.handleAuth(this.auth.isSignedIn.get());
	};

	onSignIn = () => {
		this.auth.signIn();
	};

	onSignOut = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button className="" onClick={this.onSignOut}>
					<i className="" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button className="" onClick={this.onSignIn}>
					<i className="" />
					Sign In With Google
				</button>
			);
		}
	}

	// renderSpreadSheet() {
	// 	if (this.state.isSignedIn) {
	// 		// Render spreadsheet logic here.
	// 		const SPREADSHEET_ID = "1TSdM4lR9J6ySRz7yc8yH2sqEe089apvH9Q-IExvKMRA";

	// 		window.gapi.client.sheets.spreadsheets.values
	// 			.get({
	// 				spreadsheetId: SPREADSHEET_ID,
	// 				range: "Sheet1",
	// 			})
	// 			.then(function (response) {
	// 				var range = response.result;
	// 				console.log(range);
	// 			});
	// 		return <div>SPREADSHEET</div>;
	// 	}
	// }

	// renderUpdateSpreadSheet() {
	// 	if (this.state.isSignedIn) {
	// 		// Render spreadsheet logic here.
	// 		const SPREADSHEET_ID = "1TSdM4lR9J6ySRz7yc8yH2sqEe089apvH9Q-IExvKMRA";

	// 		var params = {
	// 			spreadsheetId: SPREADSHEET_ID,
	// 			range: "Sheet1",
	// 			valueInputOption: "RAW",
	// 			insertDataOption: "INSERT_ROWS",
	// 		};

	// 		var valueRangeBody = {
	// 			values: [
	// 				["Lindsey", "Dustin", "Carving"],
	// 				["Dustin", "Lindsey", "Jumping"],
	// 			],
	// 		};

	// 		var request = window.gapi.client.sheets.spreadsheets.values.append(
	// 			params,
	// 			valueRangeBody
	// 		);

	// 		request.then(
	// 			function (response) {
	// 				console.log(response.result);
	// 			},
	// 			function (reason) {
	// 				console.error("Error: " + reason.result.error.message);
	// 			}
	// 		);
	// 	}
	// }

	render() {
		return (
			<div>
				<div>{this.renderAuthButton()}</div>
			</div>
		);
	}
}

export default GoogleAuth;
