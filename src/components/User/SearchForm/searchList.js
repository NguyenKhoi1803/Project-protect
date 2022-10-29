import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTour } from "../../../store/user/fetchTour";
import TourItem from "../TourProduct/tourItem";
import "./styles.scss";

function SearchList() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const newTour = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const newTourArr = newTour?.filter(
    (item) => new Date(item.startDate).getTime() > new Date().getTime()
  );

  const pattern = new RegExp(id.trim(), "i");
  const arr = newTourArr?.filter((item) => pattern.test(item.to));

  const arrDay = newTourArr?.filter((item) => item.numberDay == id);

  return (
    <div className="container_SearchList">
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
