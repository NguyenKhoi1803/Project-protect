import React from "react";
// import "./styles.scss";

function CommentItem({ item }) {
  return (
    <div className="commentItem">
      <div className="commentItem__img">
        <img src={item.avatar} />
      </div>
      <div className="commentItem__info">
        <h4>{item.name}</h4>
        <p>{item.descrip}</p>
      </div>
    </div>
  );
}

export default CommentItem;
