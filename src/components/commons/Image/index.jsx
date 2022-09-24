/* eslint-disable react/prop-types */
import React from "react";

import remove from "./images/closed.png";

import { Text } from "../Typo/index";

import * as S from "./styled";

export default function Image({
  width,
  src,
  name,
  hasRemove,
  onRemove,
  rightPlace,
  ...rest
}) {
  return (
    <S.Wrapper {...rest}>
      <S.Img width={width} src={src} />
      {name && <Text>{name}</Text>}
      {hasRemove && (
        <S.Button onClick={onRemove} style={{ right: rightPlace || "42px" }}>
          <img src={remove} alt="" />
        </S.Button>
      )}
    </S.Wrapper>
  );
}
