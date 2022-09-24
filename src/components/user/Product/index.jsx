import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user";
import ProductItem from "./ProuductItem";

function ProductList(props) {
  const dispatch = useDispatch();
  const newTourArr = useSelector((state) => state.tour.tour);
  console.log("newTourArr", newTourArr);
  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const renderItem = () => {
    return newTourArr?.map((item) => {
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
    </div>
  );
}

export default ProductList;
