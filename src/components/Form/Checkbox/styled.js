import styled, { keyframes, css } from "styled-components";

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  span {
    margin-left: 25px;
    display: block;

    ${({ $bigger }) =>
      $bigger &&
      css`
        margin-left: 29px;
      `}

    ${({ $isBold }) =>
      $isBold &&
      css`
        font-weight: 700;
      `}
  }
`;

export const rotate = keyframes`
from {
  opacity: 0;
  transform: rotate(0deg);
}
to {
  opacity: 1;
  transform: rotate(45deg);
}
`;

export const Indicator = styled.div`
  width: ${({ $bigger }) => ($bigger ? "1.4em" : "1.2em")};
  height: ${({ $bigger }) => ($bigger ? "1.4em" : "1.2em")};
  background: white;
  position: absolute;
  top: 0em;
  border: 1px solid #c1c1c1;
  border-radius: 2px;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Label}:hover & {
    background: #efefef;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.08em;
    left: 0.36em;
    width: 35%;
    height: 70%;
    border: solid #f8d000;
    border-width: 0 2px 2px 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${Input}:checked + & {
    border: 1px solid #f8d000;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;
