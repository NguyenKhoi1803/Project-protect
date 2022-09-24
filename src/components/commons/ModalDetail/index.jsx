import React from "react";
import PropTypes from "prop-types";

import edit from "./images/edit.png";

import * as S from "./styled";

Detail.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  hasEdit: PropTypes.bool,
  onEdit: PropTypes.func,
  width: PropTypes.string
};

function Detail({
  children,
  visible,
  onCancel,
  hasEdit = false,
  onEdit,
  width,
  ...rest
}) {
  return (
    <S.Detail
      visible={visible}
      onCancel={onCancel}
      centered
      footer={null}
      width={width}
      {...rest}
    >
      {hasEdit && (
        <S.Edit onClick={onEdit}>
          <img src={edit} alt="" />
        </S.Edit>
      )}
      {children}
    </S.Detail>
  );
}

export default Detail;
