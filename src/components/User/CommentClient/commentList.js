import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "../../../store/user/commentSlice";
import "./styles.scss";
import CommentItem from "./commentItem";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CommentList() {
  const dispatch = useDispatch();
  const newCommentArr = useSelector(
    (state) => state.fetchCommentReducer.comments
  );

  console.log("newTourArr", newCommentArr);
  useEffect(() => {
    dispatch(fetchComment());
  }, [dispatch]);

  const renderItem = () => {
    return newCommentArr?.map((item) => {
      return <CommentItem item={item} key={item?.id} />;
    });
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="container__comment">
      <div className="container__comment--list">
        <h2>KHÁCH HÀNG NÓI GÌ VỀ LOCAL TOURIST </h2>
        <Slider {...settings}>{renderItem()}</Slider>
      </div>

     
    </div>
  );
}

export default CommentList;
