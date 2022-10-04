import React from "react";
import SortBy from "../../components/User/SortBy";
import TourList from "../../components/User/tourList"
import Header from "../Header";

function ListPage(props) {
  return (
    <div className="ListPage">
      <Header />
      <div className="ListPage__Body">
      <SortBy/>
      <TourList/>
      </div>
    </div>
  );
}

export default ListPage;
