import React from "react";
import Login from "../../components/User/Login";
import Register from "../../components/User/Register";

import "../Header/styles.scss";

function Header(props) {
  return (
    <div className="container__Header">
      <img
        src="https://www.tsttourist.com/vnt_upload/weblink/Logo-TST-tourist.png"
        alt=""
      />
      <Register />
      <Login />
    </div>
  );
}

export default Header;
