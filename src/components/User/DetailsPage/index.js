import React from "react";
import BodyList from "../BodyHomePage/BodyList-HomePage";

import "./styles.scss";

function DetailsPage(props) {
  const data = [
    {
      img: "https://www.tsttourist.com/vnt_upload/tour/05_2022/96171834_1.jpg",
      price: {
        adults: 11111,
        children: 22222,
      },
      from: "Hồ Chí Minh",
      to: "Đà Nẵng",
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
      id: 1665692029896,
    },
  ];

  return (
    <div className="container__DetailsCard">
      {data?.map((item) => (
        <div className="container__DetailsCard--all">
          <h1>{item.nameTour}</h1>
          <div className="container__DetailsCard--title">
            <img src={item.img} alt="" />
            <ul className="container__DetailsCard--info">
              <li>
                <p className="p-at">Mã Tour : </p>
                <p className="p-as">{item.id}</p>
              </li>
              <li>
                <p className="p-at">Ngày Khởi Hành : </p>
                <p className="p-as">{item.startDate}</p>
              </li>
              <li>
                <p className="p-at">Ngày Về: </p>
                <p className="p-as">{item.endDate}</p>
              </li>
              <li>
                <p className="p-at">Nơi Khởi Hành: </p>
                <p className="p-as">{item.from}</p>
              </li>
              <li>
                <p className="p-at">Nơi Đến : </p>
                <p className="p-as">{item.to}</p>
              </li>
              <li>
                <p className="p-at">Số Chỗ Còn Nhận: </p>
                <p className="p-as">{item.number}</p>
              </li>
              <div>
                <button class="container__DetailsCard--button">Đặt Ngay</button>
              </div>
            </ul>
          </div>
        </div>
      ))}

      <BodyList />
    </div>
  );
}

export default DetailsPage;
