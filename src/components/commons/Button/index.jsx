import React, { memo } from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

Button.propTypes = {
  $type: PropTypes.oneOf(["secondary", "gray", "outline", "primary"]),
  children: PropTypes.node,
  size: PropTypes.string,
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.any,
  disabledHover: PropTypes.bool
};

function Button({
  $type,
  children,
  size = "md",
  maxWidth,
  width,
  disabledHover,
  borderRadius,
  ...rest
}) {
  if ($type === "secondary")
    return (
      <S.SecondaryButton
        type="button"
        $size={size}
        $maxWidth={maxWidth}
        $width={width}
        $borderRadius={borderRadius}
        {...rest}
      >
        {children}
      </S.SecondaryButton>
    );

  if ($type === "outline")
    return (
      <S.OutlineButton
        type="button"
        $size={size}
        $maxWidth={maxWidth}
        $width={width}
        $borderRadius={borderRadius}
        $disabledHover={disabledHover}
        {...rest}
      >
        {children}
      </S.OutlineButton>
    );

  if ($type === "gray")
    return (
      <S.GrayButton
        type="button"
        $size={size}
        $maxWidth={maxWidth}
        $width={width}
        $borderRadius={borderRadius}
        {...rest}
      >
        {children}
      </S.GrayButton>
    );

  if ($type === "redDisable")
    return (
      <S.RedDisable
        type="button"
        $size={size}
        $maxWidth={maxWidth}
        $width={width}
        $borderRadius={borderRadius}
        {...rest}
      >
        {children}
      </S.RedDisable>
    );

  return (
    <S.PrimaryButton
      type="button"
      $size={size}
      $maxWidth={maxWidth}
      $width={width}
      $borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </S.PrimaryButton>
  );
}

export default memo(Button);
