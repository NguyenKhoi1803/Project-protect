import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";
import SortBy from "../SortBy/listSort";

import TourItem from "../tourItem";
import "../tourList/styles.scss";

function TourList() {
  const dispatch = useDispatch();
  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);
  const filterList = useSelector((state) => state.filterReducer.select);

  console.log("fiterList", filterList);
  console.log("newTourArr", newTourArr);

  const arr = newTourArr?.filter((item) => item.to === filterList);

  console.log("arr", arr);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  return (
    <div className="TourList">
      <SortBy />
      {arr?.map((item) => (
        <TourItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TourList;
