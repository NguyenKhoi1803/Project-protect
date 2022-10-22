import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTour } from "../../../store/user/fetchTour";
import TourItem from "../TourProduct/tourItem";
import "./styles.scss";

function SearchList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newTour = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const arr = newTour?.filter((item) => item.to == id);

  return (
    <div className="container_SearchList">
      <div className="SearchList">
        {arr?.map((item) => (
          <TourItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SearchList;
