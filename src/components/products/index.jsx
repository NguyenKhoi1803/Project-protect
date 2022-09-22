import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../slices/tourSlice";
import ProductItem from "./productsItem";

function Product() {
  const dispatch = useDispatch();
  const tourArr = useSelector((state) => state.tour.tours);
  console.log("asdasd", tourArr);
  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const renderItem = () => {
    return tourArr?.map((item) => {
      return (
        <div key={item?.id}>
          <ProductItem item={item} />
        </div>
      );
    });
  };
  return (
    <div>
      <div>{renderItem()}</div>
      <h1>asdasdas</h1>
    </div>
  );
}

export default Product;
