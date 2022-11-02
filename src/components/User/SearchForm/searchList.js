import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { fetchTour } from "../../../store/user/fetchTour";
import TourItem from "../TourProduct/tourItem";
import "./styles.scss";
import SearchForm from "../SearchForm";
import SortByDay from "../SortBy/sortDay";
import SortByLocation from "../SortBy/sortLocation";

function SearchList() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const newTour = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const newTourArr = newTour?.filter(
    (item) => new Date(item.startDate).getTime() > new Date().getTime()
  );

  const newArr = newTourArr?.filter((item) => item.quantity > 0);

  const pattern = new RegExp(id.trim(), "i");
  const arr = newArr?.filter((item) => pattern.test(item.to));

  const arrDay = newArr?.filter((item) => item.numberDay == id);

  return (
    <div className="container_SearchList">
      <div className="container__body--search">
        <div className="container__body--searchItem">
          <SearchForm />
          <SortByDay />
          <SortByLocation />
        </div>
      </div>
      <div className="SearchList">
        {arr?.map((item) => (
          <TourItem key={item.id} item={item} />
        ))}
        {arrDay?.map((item) => (
          <TourItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SearchList;
