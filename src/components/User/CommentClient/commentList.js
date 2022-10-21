import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "../../../store/user/commentSlice";
import "./styles.scss";
import CommentItem from "./commentItem";
import { Carousel } from "antd";
import Slider from "react-slick";

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

  return (
    <div className="container__comment">
      <div className="container__comment--list">
        <h2>KHÁCH HÀNG NÓI GÌ VỀ TOUR </h2>
        <Slider autoplay>{renderItem()}</Slider>
      </div>
    </div>
  );
}

export default CommentList;
