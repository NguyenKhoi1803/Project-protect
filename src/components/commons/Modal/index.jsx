import React from "react";
import Button from "components/commons/Button";
import PropTypes from "prop-types";
import * as S from "./styled";

Modal.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  onCancel: PropTypes.any,
  footer: PropTypes.any,
  set_filter: PropTypes.any,
  has_button: PropTypes.bool,
  border_radius: PropTypes.string
};

function Modal({
  title,
  titleButton,
  children,
  className,
  width = "368px",
  filter,
  set_filter,
  onCancel,
  onOk,
  has_button = true,
  border_radius,
  footer = null,
  ...rest
}) {
  return (
    <S.Modal
      title={title}
      width={width}
      className={className}
      visible={filter}
      onCancel={onCancel}
      onOk={onOk}
      footer={footer}
      $borderRadius={border_radius}
      centered
      {...rest}
    >
      {children}
      {has_button && (
        <S.Footer>
          <Button $borderRadius="8px" $width="100%" onClick={onOk}>
            {/* TODO */}
            {titleButton || "THÊM"}
          </Button>
        </S.Footer>
      )}
    </S.Modal>
  );
}

export default Modal;
