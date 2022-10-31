import { Input } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { generatePath, useNavigate, useSearchParams } from "react-router-dom";
import { fetchTour } from "../../../store/user/fetchTour";

import "./styles.scss";
const { Search } = Input;

function SearchForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const onSearch = (value) => {
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
          placeholder="Tìm ở đây nè"
          onSearch={onSearch}
          enterButton
          size="large"
        />
      </div>
    </div>
  );
}
export default SearchForm;
