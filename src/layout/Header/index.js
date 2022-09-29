import React from "react";
import SearchForm from "../../components/User/searchTour";
import Banner from "../Banner";
import "../Header/styles.scss";

function Header(props) {
  return (
    <div>
      <div className="container__Header">
        <img
          src="https://www.tsttourist.com/vnt_upload/weblink/Logo-TST-tourist.png"
          alt=""
        />
        <div className="container__Header--Space"></div>
        <SearchForm />
      </div>
      <Banner />
    </div>
  );
}

export default Header;
