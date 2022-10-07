import React from "react";

import TourList from "../../components/User/tourList";
import Header from "../Header";

function ListPage(props) {
  return (
    <div className="ListPage">
      <Header />
      <div className="ListPage__Body">
        <TourList />
      </div>
    </div>
  );
}

export default ListPage;
