import React from "react";
import SearchForm from "../../components/User/searchTour";

import "../Header/styles.scss";

function Header(props) {
  return (
    <div className="container__Header">
      <img
        src="https://www.tsttourist.com/vnt_upload/weblink/Logo-TST-tourist.png"
        alt=""
      />

      <SearchForm />
    </div>
  );
}

export default Header;
