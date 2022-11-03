import React from "react";
import { Card, Col, Row } from "antd";
import "./styles.scss";

function Food(props) {
  const item = [
    {
      title: "Mì quảng ếch",
      img: "http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/105152_og_1.jpeg",
    },
    {
      title: "Bún mắm nêm",
      img: "http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/mon-ngon-da-nang.jpg",
    },
    {
      title: "Bánh xèo tôm nhảy",
      img: "http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/banh-xeo.jpg",
    },
    {
      title: "Các loại bánh",
      img: "http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/banh-goi.jpg",
    },
    {
      title: "Cua rang me",
      img: "http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/cua.jpg",
    },
    {
      title: "Cơm gà Tam Kì",
      img: "http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/com-ga.jpg",
    },
  ];

  const slides = item?.map((item) => {
    return (
      <div key={item.title} className="card__food">
        <h3>{item.title}</h3>
        <img src={item.img} alt="" className="img" />
      </div>
    );
  });

  return (
    <div className="container__food">
      <div className="container__food--list">
        <h2>Thưởng thức ẩm thực miền Trung</h2>
        <h4>Cảm nhận tinh hoa đất trời</h4>
        <div className="container__food--details ">{slides}</div>
      </div>
    </div>
  );
}

export default Food;
