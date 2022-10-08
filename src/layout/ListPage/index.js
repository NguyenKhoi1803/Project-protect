import React from "react";
import SortBy from "../../components/User/SortBy/listSort";

import TourList from "../../components/User/tourList";
import Header from "../Header";
import "./styles.scss";

function ListPage(props) {
  return (
    <div className="ListPage">
      <Header />
      <div className="ListPage__Body">
        <TourList />
        <SortBy />
      </div>
    </div>
  );
}

export default ListPage;
