import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "../../../store/user/commentSlice";
import "./styles.scss";
import CommentItem from "./commentItem";
import { Carousel } from "antd";

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
      return (
        <div className="renderComment" key={item?.id}>
          <CommentItem item={item} />
        </div>
      );
    });
  };

  return (
    <div className="container__comment">
      <div className="renderComment123">
        <h1>KHÁCH HÀNG NÓI GÌ VỀ TOUR </h1>
        <Carousel autoplay>{renderItem()}</Carousel>
      </div>
    </div>
  );
}

export default CommentList;
