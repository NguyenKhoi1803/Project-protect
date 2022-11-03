import React, { useEffect, useState } from "react";
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
import ReactPaginate from "react-paginate";

function SearchList() {
  let { id } = useParams();

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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center "}
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

export default SearchList;
