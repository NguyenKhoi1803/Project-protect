/* eslint-disable react/prop-types */
import React from "react";
import icon from "@/images/upload.svg";
import * as S from "./styled";

const Upload = ({ placeholder, ...rest }) => (
  <S.Upload {...rest}>
    <S.Wrapper>
      <img src={icon} alt="" />
      <S.Placeholder>{placeholder}</S.Placeholder>
    </S.Wrapper>
  </S.Upload>
);

export default Upload;
