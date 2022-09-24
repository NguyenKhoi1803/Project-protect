import { createGlobalStyle, css } from "styled-components";

import utility from "./utility";

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const base = css`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: "Roboto", "Poppins", sans-serif;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: #333333;
  }

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    transition: 0.4s;

    &:hover {
      opacity: 0.8;
    }
  }

  button,
  input {
    outline: none;
    border: 0;

    &:focus {
      outline: none;
    }
  }

  iframe {
    border: 0;
    width: 100%;
  }

  ::selection {
    color: #fff;
    background-color: #f8d000;
  }

  .ant-table-column-sorter {
    .active {
      svg {
        fill: #efb86b !important;
      }
    }
    svg {
      fill: #ffffff !important;
    }
  }

  .quantity-picker {
    overflow: hidden !important;
    border-radius: 6px !important;

    .quantity-modifier {
      background: #ee9416 !important ;
      color: #fff !important;
      height: 46px !important;
    }

    .quantity-display {
      background-color: #fdf1d8 !important;
    }
  }

  .ant-rate-star {
    svg {
      width: 16px;
      height: 16px;
      fill: #ee9416 !important;
    }
  }
`;

const scrollApp = css`
  /* total width */
  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-track:hover {
    background-color: #f4f4f4;
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #a0a0a5;
    border-radius: 16px;
    z-index: 1000;
    /*     border:5px solid #a0a0a5 */
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a5;
    /*     border:1px solid #a0a0a5 */
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${base}
  ${utility}
  ${scrollApp}
`;

export default GlobalStyle;
