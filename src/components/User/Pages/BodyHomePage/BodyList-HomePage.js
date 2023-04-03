import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import Slider from "react-slick";
import BodyItem from "./BodyItem-HomePage";
import Special from "../Special";
import Voucher from "../../../../layout/User/GetVoucher";
import Food from "../../../../layout/User/Food";
import tourApis from "../../../../apis/tourApis";
import { STATUS_CODE } from "../../../../constants/indexs";
function BodyList() {
  const [tourList, setTourList] = useState([])
  const [isLoadData, setIsLoadData] = useState(true)

  const fetchData = async () => {
    setIsLoadData(true)

    const response = await tourApis.getAll()

    if (response.status === STATUS_CODE.OK) {
      setTourList(response.data)
    } else {
      console.log("Get list failed", response.status)
    }
  }
  const newArr123 = tourList?.filter(
    (item) => new Date(item.startDate).getTime() > (new Date().getTime() - 21600000) && item.quantity > 0
  );
  useEffect(() => {
    fetchData()
  }, [isLoadData])


  const startDay = new Date("2023-01-01").getTime();
  const endDay = new Date("2023-04-29").getTime();

  const newTourArrTo = newArr123?.filter((item) => item.from == "Đà Nẵng")

  const newTourArrSeason = newArr123?.filter((item) => new Date(item.startDate).getTime() >= startDay &&
    new Date(item.startDate).getTime() <= endDay)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };


  return (
    <div className="container__body">
      <div className="container__body--List">
        <div className="container__body--Card">
          <div className="container__body--Header">
            {newTourArrTo.length == 0 ? (
              <div className="error">
                <h3>Chưa có dữ liệu !</h3>
              </div>
            ) : (
              <div>
                <h2 >*Đà Nẵng</h2>
                <Slider autoplay {...settings}>{newTourArrTo?.map((item) => (
                  <BodyItem item={item} key={item?.id} />
                ))}</Slider>
              </div>
            )}
          </div>
        </div>
      </div>
      <Special />
      <div className="container__body--List">
        <div className="container__body--Card">
          <div className="container__body--Header">
            {newTourArrSeason.length === 0 ? (
              <div className="error">
                <h3>Chưa có dữ liệu !</h3>
              </div>
            ) : (
              <div>
                <h2 >  *Tour Mùa Thu</h2>
                <Slider autoplay {...settings}>{newTourArrSeason?.map((item) => (
                  <BodyItem item={item} key={item?.id} />
                ))}</Slider>
              </div>
            )}
          </div>
        </div>
      </div>
      <Food />
      <Voucher />
    </div>
  );
}
export default BodyList;
