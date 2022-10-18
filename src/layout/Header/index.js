import React from "react";
import Banner from "../Banner";
import SearchForm from "../../components/User/SearchForm";
import NavBar from "../NavBar";
import "./styles.scss";

function Header() {
  return (
    <div className="container__Header">
      <NavBar />
      <SearchForm />
      <Banner />
    </div>
  );
}

export default Header;
