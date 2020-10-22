import React from "react";

class GoogleAuth extends React.Component {
  // Array of API discovery doc URLs for APIs used by the quickstart
  DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

  componentDidMount() {
    // Initialize OAuth2 library.
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          apiKey: "AIzaSyCRGMUcELLJ8paWzb67ORZs67bpqR73bDI",
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: "email https://www.googleapis.com/auth/spreadsheets",
          discoveryDocs: this.DISCOVERY_DOCS,
        })
        .then(() => {
          // Promise that is called when init is sucessfully returned.
          this.auth = window.gapi.auth2.getAuthInstance();
          this.props.handleAuth(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
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
        <button className="btn btn-auth" onClick={this.onSignOut}>
          <i className="" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="btn btn-auth" onClick={this.onSignIn}>
          <i className="" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}

export default GoogleAuth;
