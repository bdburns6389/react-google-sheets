import React, { useState } from "react";
import Form from "./Form";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);

  const handleAuth = (input) => {
    setIsSignedIn(input);
  };

  const handleSubmit = (e, input) => {
    e.preventDefault();

    // Get values from input and create array.
    var values = Object.values(input);
    var valueRangeBody = { values: [values] };
    renderUpdateSpreadSheet(valueRangeBody);
  };

  const renderUpdateSpreadSheet = (valueRangeBody) => {
    if (isSignedIn) {
      var params = {
        spreadsheetId: process.env.REACT_APP_SPREADSHEET_ID,
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
    <Layout>
      <Navbar handleAuth={handleAuth} isSignedIn={isSignedIn} />
      <Form handleSubmit={handleSubmit} />
    </Layout>
  );
}

export default App;
