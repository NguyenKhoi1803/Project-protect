import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTour } from "../../../store/user/fetchTour";


import "./styles.scss";

function DetailsPage() {

  const dispatch = useDispatch()

  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);

  // useEffect(() => {
  //   dispatch(fetchTour());
  // }, [dispatch]);

  const { id } = useParams();

  // const arr = newTourArr?.filter((item) => item.id === `${ids}`)
  // console.log("ids ", ids)


  // console.log("arr ", arr)
  // console.log("newTourArr ", newTourArr)
  return (
    // <div className="container__DetailsCard">

    //   <div className="container__DetailsCard--all">
    //     <h1>{arr.nameTour}</h1>
    //     <div className="container__DetailsCard--title">
    //       <img src={arr.img} alt="" />
    //       <ul className="container__DetailsCard--info">
    //         <li>
    //           <p className="p-at">Mã Tour : </p>
    //           <p className="p-as">{arr.id}</p>
    //         </li>
    //         <li>
    //           <p className="p-at">Ngày Khởi Hành : </p>
    //           <p className="p-as">{arr.startDate}</p>
    //         </li>
    //         <li>
    //           <p className="p-at">Ngày Về: </p>
    //           <p className="p-as">{arr.endDate}</p>
    //         </li>
    //         <li>
    //           <p className="p-at">Nơi Khởi Hành: </p>
    //           <p className="p-as">{arr.from}</p>
    //         </li>
    //         <li>
    //           <p className="p-at">Nơi Đến : </p>
    //           <p className="p-as">{arr.to}</p>
    //         </li>
    //         <li>
    //           <p className="p-at">Số Chỗ Còn Nhận: </p>
    //           <p className="p-as">{arr.number}</p>
    //         </li>
    //         <div>
    //           <button class="container__DetailsCard--button">Đặt Ngay</button>
    //         </div>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <div>
      {id}
    </div>
  );
}

export default DetailsPage;
