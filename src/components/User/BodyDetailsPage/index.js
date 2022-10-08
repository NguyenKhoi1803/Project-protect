import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { fetchTour } from "../../../store/user/fetchTour";

function BodyDetailsPage(props) {
  const arr = {
    img: "https://www.tsttourist.com/vnt_upload/tour/05_2022/96171834_1.jpg",
    price: {
      adults: 11111,
      children: 22222,
    },
    from: "Hồ Chí Minh",
    to: "Hà Nội",
    startDate: "2022-09-23",
    endDate: "2022-10-21",
    nameTour: "Tour Du Lich Ha Noi",
    address: {
      province: "Zhejiang",
      street: "dsadsfsdfds",
    },
    vehicle: "oto",
    number: 6,
    service: ["A", "E", "C"],
    details: "dasfsdfsdfdsfdsffs\nsfsdf\nsdf\nsdf\nsd\nfsd\nfs\ndf\nsdf",
    id: 11,
  };
  return (
    <div className="contaier">
      <div className="container__BodyDetails">
        <h1>{arr.nameTour}</h1>

        <div className="container__BodyDetails--info">
          <img src={arr.img} />
          <div>
            <p>Ma Tour : {arr.id}</p>
            <p>Ngay Khoi Hanh : {arr.startDate}</p>
            <p>Noi Khoi Hanh : {arr.from}</p>
            <p>Noi Den : {arr.to}</p>
            <p>Phuong Tien : {arr.vehicle}</p>

            <div className="container__BodyDetails--button">
              <p> Gía Người Lớn {arr.price.adults}</p>
              <p> Gía Trẻ Em {arr.price.children}</p>

              <Button color="warning">Đặt ngay</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyDetailsPage;
