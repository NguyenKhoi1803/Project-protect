import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

export const Text = ({ children, ...rest }) => (
  <S.Text {...rest}>{children}</S.Text>
);

export const Heading1 = ({ children, ...rest }) => (
  <S.Heading1 {...rest}>{children}</S.Heading1>
);

export const Heading2 = ({ children, ...rest }) => (
  <S.Heading2 {...rest}>{children}</S.Heading2>
);

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Heading1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Heading2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
