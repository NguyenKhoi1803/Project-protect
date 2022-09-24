import styled from "styled-components";
import media from "styles/breakpoints";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pdf {
    margin-top: 16px;

    .annotationLayer {
      display: none;
    }
  }

  .react-pdf__Page__canvas {
    width: 693px !important;
    height: 900px !important;

    ${media.fmDesktop`
      width: 100% !important;
      height: 100% !important;
    `}
  }
`;

export const WrapButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  z-index: 5;

  img:hover {
    cursor: pointer;
  }
`;
