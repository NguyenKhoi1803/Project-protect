import React from "react";
import Banner from "../Banner";
import "./styles.scss";
import Navbars from "../Navbars";


function Header() {
  return (
    <div className="container__Header">
      <div className="container__Header--fixed">
        <Navbars />
      </div>
      <Banner />
    </div>
  );
}

export default Header;
