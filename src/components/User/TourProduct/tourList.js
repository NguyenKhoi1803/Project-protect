import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";
import SearchForm from "../SearchForm";
import SortByDay from "../SortBy/sortDay";
import SortByLocation from "../SortBy/sortLocation";
import TourItem from "../TourProduct/tourItem";
import ReactPaginate from "react-paginate";

import "./styles.scss";

function TourList() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const handlePageClick = (data) => {
    console.log("clicked", data.selected);
  };

  const TourArr = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const newTourArr = TourArr?.filter(
    (item) => new Date(item.startDate).getTime() > new Date().getTime()
  );

  const newArr = newTourArr?.filter((item) => item.quantity > 0);

  return (
    <div className="container__TourList">
      <div className="container__body--search">
        <div className="container__body--searchItem">
          <SearchForm />
          <SortByDay />
          <SortByLocation />
        </div>
      </div>
      <div className="TourList">
        {newArr?.map((item) => (
          <TourItem key={item.id} item={item} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={15}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default TourList;
