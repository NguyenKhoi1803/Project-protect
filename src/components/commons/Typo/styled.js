import styled, { css } from "styled-components";
import media from "styles/breakpoints";

export const Heading1 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: 1px;
  color: ${({ $color }) => $color || "#2C2C2C"};

  ${media.fmDesktop`
    font-size: 16px;
    line-height: 26px;
  `}

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};
`;

export const Heading2 = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${({ $color }) => $color || "#2C2C2C"};

  ${media.fmDesktop`
    font-size: 14px;
    line-height: 22px;
  `}

  ${({ isBold, theme }) =>
    css`
      font-weight: ${isBold
        ? theme.fontWeight.extraBold
        : theme.fontWeight.bold};
    `}

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};
`;

export const Text = styled.p`
  line-height: 24px;
  font-size: 14px;
  color: ${({ $color }) => $color || "#2C2C2C"};

  ${media.fmDesktop`
    font-size: 12px;
    line-height: 20px;
  `}

  ${({ $underline }) =>
    $underline &&
    css`
      text-decoration: underline;
    `};

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: bold;
      font-size: 16px;
    `}
`;
