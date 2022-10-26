import React from "react";
import Banner from "../Banner";
import SearchForm from "../../../components/User/SearchForm";
import "./styles.scss";

import SortByLocation from "../../../components/User/SortBy/sortLocation";
import SortByDay from "../../../components/User/SortBy/sortDay";

function Header() {
  return (
    <div className="container__Header">
      <div className="container__Header--fixed">
        <NavBar />
        <SearchForm />
        <SortByLocation />
        <SortByDay />
      </div>
      <Banner />
    </div>
  );
}

export default Header;
