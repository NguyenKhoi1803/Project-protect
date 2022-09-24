import React from "react";
import Button from "components/commons/Button";
import PropTypes from "prop-types";
import * as S from "./styled";
import { Text } from "../Typo";

ModalConfirm.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  onCancel: PropTypes.any,
  footer: PropTypes.any,
  set_filter: PropTypes.any
};

function ModalConfirm({
  des,
  width,
  className,
  visible,
  set_visible,
  onCancel,
  onOk,
  ...rest
}) {
  return (
    <S.Modal
      title=""
      width={width}
      className={className}
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      footer={null}
      centered
      {...rest}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: "20px",
          lineHeight: "30px",
          fontWeight: "600"
        }}
      >
        {des}
      </Text>
      <S.Footer>
        <Button $borderRadius="8px" $width="171px" onClick={onCancel}>
          HỦY
        </Button>
        <Button
          style={{ background: "#9B9B9B" }}
          $borderRadius="8px"
          $width="171px"
          onClick={onOk}
        >
          ĐỒNG Ý
        </Button>
      </S.Footer>
    </S.Modal>
  );
}

export default ModalConfirm;
