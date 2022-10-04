import React from "react";

import BodyList from "../../components/User/BodyHomePage/BodyList-HomePage";
import Banner from "../Banner";
import Header from "../Header";

function HomePage(props) {
  return (
    <div className="HomePage">
      <Header />
      <Banner />
      <BodyList />
    </div>
  );
}

export default HomePage;
