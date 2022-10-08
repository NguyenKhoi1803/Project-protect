import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { addToCart } from "../../../store/user/addToCartSlice";
import "../tourItem/styles.scss";

function TourItem({ item }) {
  const dispatch = useDispatch();

  const id = new Date().getTime();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, id: id }));
    console.log("item", item);
  };

  return (
    <div className="container__tourItem">
      <img className="container__tourItem--img" src={item.img} />
      <div className="container__tourItem-details">
        <div className="container__tourItem-details1">
          <h4>{item.nameTour}</h4>
          <p>
            {item.from} - {item.to}
          </p>

          <p>Phương tiện di chuyển : {item.vehicle}</p>
          <p>Ngày Khởi Hành : {item.startDate}</p>
          <p>Ngày Về : {item.endDate}</p>
        </div>
        <div className="container__tourItem-details2">
          <p>Gía Người Lớn : {item.price.adults}</p>
          <p>Gía Người Trẻ Em : {item.price.children}</p>
          <Button color="info">Mua Tour</Button>
        </div>
      </div>
    </div>
  );
}

export default TourItem;
