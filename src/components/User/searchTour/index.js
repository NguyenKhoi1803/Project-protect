import React from "react";
import "../searchTour/styles.scss"
function SearchForm() {
  return (
    <form className="container__Search">
      <input placeholder="Search"></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
