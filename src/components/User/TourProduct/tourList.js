import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchForm from "../SearchForm";
import SortByDay from "../SortBy/sortDay";
import SortByLocation from "../SortBy/sortLocation";
import TourItem from "../TourProduct/tourItem";
import ReactPaginate from "react-paginate";
import "./styles.scss";

function TourList() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const limit = 5;

  useEffect(() => {
    const getTour = async () => {
      const res = await fetch(
        `http://localhost:3011/tour?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / 10));
      setItems(data);
    };
    getTour();
  }, []);

  console.log(items);

  const getTours = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3011/tour?_page=${currentPage}limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log("clicked", data.selected);
    let currentPage = data.selected + 1;
    const tourFromServer = await getTours(currentPage);
    setItems(tourFromServer);
  };

  const newTourArr = items?.filter(
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
        style="margin-bottom: 0;padding: 20px;"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
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
