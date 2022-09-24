import { css } from "styled-components";

const sizes = {
  largeDesktop: 1640,
  desktop: 1440,
  fmDesktop: 1366,
  smallDesktop: 1200,
  tablet: 992,
  phone: 768,
  smallPhone: 575
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
