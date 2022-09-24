import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .arrows {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    z-index: 10000;
    .prev {
      &:hover {
        cursor: pointer;

        .point {
          fill: #f8d000;
        }
      }
    }
    .next {
      &:hover {
        cursor: pointer;

        .point {
          fill: #f8d000;
        }
      }
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  color: #2c2c2c;
  margin-bottom: 16px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 6.31px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.63));
  border-radius: 6.31px;
  z-index: 10;
  opacity: 0;
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

export const WrapImage = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  border-radius: 6.31px;
  display: flex;
  justify-content: center;
`;
