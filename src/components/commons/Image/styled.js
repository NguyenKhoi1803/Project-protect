import styled from "styled-components";
import { Image as IM } from "antd";

export const Img = styled(IM)``;

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 16px;
  position: relative;
`;

export const Button = styled.div`
  position: absolute;
  top: 2px;
  z-index: 0;
  cursor: pointer;
`;
