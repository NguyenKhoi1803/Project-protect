import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";

import TourItem from "../tourItem";
import "../tourList/styles.scss"

function TourList() {
  const dispatch = useDispatch();
  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);

  console.log("newTourArr", newTourArr);
  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const renderItem = () => {
    return newTourArr?.map((item) => {
      return (
        <div className="TourList" key={item?.id}>
          <TourItem item={item} />
        </div>
      );
    });
  };
  return (
    <div>
      <div>{renderItem()}</div>
    </div>
  );
}

export default TourList;
