import React from "react";
// import "./styles.scss";

function CommentItem({ item }) {
  const contentStyle = {
    height: "160px",
    color: "white",
    textAlign: "center",
    
  };
  return (
    <div style={contentStyle} className="NguyenKhoi">
      <img src={item.avatar} width="200" />
      <h4>{item.name}</h4>
      <p>{item.descrip}</p>
    </div>
  );
}

export default CommentItem;
