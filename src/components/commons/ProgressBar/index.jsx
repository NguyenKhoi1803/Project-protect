import React from "react";
import * as S from "./styled";

function ProgressBar({ bgcolor, process, widthPercent }) {
  return (
    <S.Wrapper widthPercent={widthPercent}>
      <S.ChildDiv process={process}>
        <S.ProgressInfo process={process}>{`${process}%`}</S.ProgressInfo>
      </S.ChildDiv>
    </S.Wrapper>
  );
}
export default ProgressBar;
