import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../../store/user/fetchTour";
import SortBy from "../../SortBy/listSort";
import TourItem from "../../TourProduct/tourItem/index";

import "./styles.scss";

function TourList() {
  const dispatch = useDispatch();
  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);
  console.log("newTourArr", newTourArr);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

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
