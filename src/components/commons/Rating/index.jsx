import React from "react";
import { Rate } from "antd";
import { StarOutlined } from "@ant-design/icons";

import * as S from "./styled";

function Rating({
  size,
  disabled = false,
  defaultValue,
  value,
  onChange,
  ...rest
}) {
  return (
    <S.Wrapper {...rest}>
      <Rate
        allowHalf
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={onChange}
        character={() => <StarOutlined style={{ fontSize: size || "30px" }} />}
      />
    </S.Wrapper>
  );
}

export default Rating;
