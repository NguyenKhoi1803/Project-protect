import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";

import TourItem from "../tourItem";
import "../tourList/styles.scss"
import { Carousel } from "antd";

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
        <div className="renderItem" key={item?.id}>
          <TourItem item={item} />
        </div>
      );
    });
  };

  return <div className="TourList">{renderItem()}</div>;
}

export default TourList;
