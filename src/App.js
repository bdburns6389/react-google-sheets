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
	};

	return (
		<div>
			<GoogleAuth handleAuth={handleAuth} isSignedIn={isSignedIn} />
			<Form handleSubmit={handleSubmit} />
		</div>
	);
}

export default App;
