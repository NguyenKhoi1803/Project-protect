import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";

import TourItem from "../TourProduct/tourItem";

import "./styles.scss";

function TourList() {
  const dispatch = useDispatch();

  const TourArr = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const newTourArr = TourArr?.filter(
    (item) => new Date(item.startDate).getTime() > new Date().getTime()
  );

  return (
    <div className="container__TourList">
      <div className="TourList">
        {newTourArr?.map((item) => (
          <TourItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TourList;
