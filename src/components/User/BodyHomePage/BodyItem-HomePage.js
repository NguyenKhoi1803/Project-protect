import React from "react";
import { Card } from "antd";

function BodyItem({ item }) {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img src={item.img} />}
      width="200"
    >
      <p>{item.nameTour}</p>
    </Card>
  );
}

export default BodyItem;
