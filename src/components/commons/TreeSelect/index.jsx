/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropDownTreeComponent } from "@syncfusion/ej2-react-dropdowns";

import { getListPositionNoPermission } from "store/other/noPermissionSlice";

import * as S from "./styled";

function TreeSelect({
  label,
  isMulti,
  setValue,
  onChange,
  width,
  required = false,
  setValueReset,
  disabledParent = false,
  reset = false,
  ...rest
}) {
  const dispatch = useDispatch();
  const treeSelect = useRef();

  const [treeObj, setTreeObj] = useState(null);

  const listPosition = useSelector(
    state => state.noPermissionReducer.listPosition
  );

  useEffect(() => {
    dispatch(getListPositionNoPermission());
  }, [dispatch]);

  const fields = {
    dataSource: listPosition,
    value: "id",
    text: "nodeText",
    child: "nodeChild"
  };

  const settings = {
    autoCheck: true
  };

  const disabledNodeIds = [];

  const formatData = arr => {
    arr.forEach(item => {
      if (item?.nodeChild?.length > 0) {
        disabledNodeIds.push(item?.id.toString());
        formatData(item?.nodeChild);
      }
    });
  };

  formatData(listPosition);

  useEffect(() => {
    if (treeSelect) {
      setTreeObj(treeSelect.current);
    }
  }, [treeSelect]);

  useEffect(() => {
    if (treeObj && reset) {
      treeObj.clear();
    }
    if (setValueReset) setValueReset(false);
  }, [treeObj, reset, setValueReset]);

  const handleSelect = () => {
    setTimeout(() => {
      const values = treeObj?.currentValue;
      onChange(values);
    }, 500);
  };

  return (
    <S.Wrapper>
      {label && (
        <div>
          <S.Label>
            {label} {required && <S.Required>(*)</S.Required>}
          </S.Label>
        </div>
      )}
      {isMulti ? (
        <DropDownTreeComponent
          ref={treeSelect}
          fields={fields}
          treeSettings={settings}
          mode="Delimiter"
          placeholder="Chọn chức danh"
          popupHeight="400px"
          cssClass="tree-node"
          width={width}
          wrapText
          allowMultiSelection
          showCheckBox={isMulti}
          value={setValue}
          select={handleSelect}
          changeOnBlur={false}
          beforeOpen={() =>
            disabledParent && treeObj?.treeObj?.disableNodes(disabledNodeIds)
          }
        />
      ) : (
        <DropDownTreeComponent
          ref={treeSelect}
          fields={fields}
          treeSettings={settings}
          mode="Delimiter"
          placeholder="Chọn chức danh"
          popupHeight="400px"
          cssClass="tree-node"
          width={width}
          wrapText
          value={setValue}
          select={e => onChange(Number(e?.itemData?.id))}
          changeOnBlur={false}
          beforeOpen={() =>
            disabledParent && treeObj?.treeObj?.disableNodes(disabledNodeIds)
          }
        />
      )}
    </S.Wrapper>
  );
}

export default TreeSelect;
