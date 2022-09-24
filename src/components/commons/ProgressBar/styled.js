import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: ${props => props.widthPercent && props.widthPercent}%;
  height: 5px;
  background-color: #ededed;
  border-radius: 92px;
  margin: 10px 0px;
`;

export const ChildDiv = styled.div`
  height: 100%;
  width: ${props => props.process && props.process}%;
  background: linear-gradient(
    90deg,
    rgba(252, 23, 8, 0.75) 0%,
    rgba(255, 183, 28, 0.75) 95.83%
  );
  border-radius: 40px;
  text-align: right;
  position: relative;
`;

export const ProgressInfo = styled.span`
  position: absolute;
  top: -8px;
  padding: 10px;
  // right: 0;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  border-radius: 8px;
  height: 14px;
  display: flex;
  align-items: center;
  background: #f88d0f;

  ${({ process }) =>
    process < 10 &&
    css`
      right: 0px;
    `
      ? css`
          right: -30px;
        `
      : css``}
  ${({ process }) =>
    process === 100
      ? css`
          left: 91%;
        `
      : 0}
`;
