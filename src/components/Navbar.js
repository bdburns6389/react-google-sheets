import React from "react";
import GoogleAuth from "./GoogleAuth";

const Navbar = ({ handleAuth, isSignedIn }) => {
  return (
    <div className="navbar">
      <GoogleAuth handleAuth={handleAuth} isSignedIn={isSignedIn} />
    </div>
  );
};

export default Navbar;
