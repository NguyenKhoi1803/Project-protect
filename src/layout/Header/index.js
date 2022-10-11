import React from "react";
import Login from "../../components/User/Login";
import Register from "../../components/User/Register";
import Banner from "../Banner";

import "../Header/styles.scss";

function Header(props) {
  return (
    <div>
      <div className="container__Header">
        <Register />
        <Login />
      </div>
      <Banner />
    </div>
  );
}

export default Header;
