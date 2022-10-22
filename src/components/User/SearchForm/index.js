import { Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import { searchFilterChange } from "../../../store/user/sortSlice";
import "./styles.scss";
const { Search } = Input;

function SearchForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearch = (value) => {
    // console.log("val", value);
    // dispatch(searchFilterChange(value));
    // navigate("/searchlist");
    navigate(
      generatePath("/searchList/:id", {
        id: value,
      })
    );
  };

  return (
    <div className="container__searchForm">
      <div className="searchForm">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          size="large"
        />
      </div>
    </div>
  );
}
export default SearchForm;
