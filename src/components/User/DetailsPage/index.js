import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BodyList from "../BodyHomePage/BodyList-HomePage";

import "./styles.scss";

function DetailsPage() {


  const newTourArr = useSelector((state) => state.fetchTourReducer.details);

  console.log("ngk", newTourArr)





  return (
    <div className="container__DetailsCard">
      {/* {newTourArr?.map((item) => (
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
      ))} */}

      <div><h1>{newTourArr.nameTour}</h1></div>

      {/* <BodyList /> */}
    </div>

    // <div>
    //   <h2>{id}</h2>
    //   <p>asdasjhdasjd</p>
    // </div>
  );
}

export default DetailsPage;
