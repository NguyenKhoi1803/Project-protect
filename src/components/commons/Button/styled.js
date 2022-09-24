import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 8px 16px !important;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.75px;
  box-sizing: border-box;
  border: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: ${({ $borderRadius }) => $borderRadius || "26px"};

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
      padding: unset;
    `}

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      width: 100%;
      max-width: ${$maxWidth};
      padding: unset;
    `}

  ${({ $size, theme }) =>
    $size === "sm" &&
    css`
      font-size: ${theme.fontSize.base};
      height: 33px;
    `}

  ${({ $size, theme }) =>
    $size === "base" &&
    css`
      font-size: ${theme.fontSize.base};
      height: 40px;
    `}

  ${({ $size, theme }) =>
    $size === "md" &&
    css`
      font-size: ${theme.fontSize.md};
      height: 48px;
    `}

    ${({ $size, theme }) =>
    $size === "lg" &&
    css`
      font-size: ${theme.fontSize.lg};
      height: 48px;
    `}
`;

export const PrimaryButton = styled(Button)`
  background: #ee9416;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;

  &:active:enabled {
    background: #ee9416;
  }

  &:enabled:hover {
    box-shadow: 0px 2px 2px rgba(194, 0, 0, 0.25);
  }

  &:disabled {
    background-color: #cacaca;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid #ff0000;
  background-color: transparent;
  color: #ff0000;

  &:hover:enabled {
    border: 2px solid red;
  }

  &:focus:enabled {
    border: 2px solid red;
  }

  &:disabled {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    border: 2px solid #999999;
    color: #999999;
  }
`;

export const OutlineButton = styled(Button)`
  border: 1px solid #999999;
  background-color: white;
  box-sizing: border-box;
  color: #999999;
  ${({ $disabledHover }) =>
    $disabledHover &&
    css`
      border-width: 1px !important;
    `}

  &:hover:enabled {
    border-width: 2px;
  }

  &:focus:enabled {
    border-width: 2px;
  }

  &:disabled {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    border-width: 2px;
    color: #999999;
  }
`;

export const GrayButton = styled(Button)`
  background-color: #cacaca;
  color: ${({ theme }) => theme.colors.white};

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

export const RedDisable = styled(Button)`
  background-color: #ff0000;
  color: ${({ theme }) => theme.colors.white};

  &:disabled {
    background: ${({ theme }) => theme.colors.ff0000};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    opacity: 0.5;
  }
`;
