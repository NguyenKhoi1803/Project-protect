import React, { useEffect } from "react";
import _debounce from "lodash/debounce";
import PropTypes from "prop-types";
import { Pagination } from "antd";
import { useHistory, generatePath } from "react-router-dom";

import request from "services/request";

import { ASSETS_URL } from "constants/configs";

import { sizeOptions } from "utils/constants";
import { ROUTES_ADMIN } from "routes/constants";

import { Heading1, Text } from "components/commons/Typo";
import Input from "components/Form/InputField";
import SelectField from "components/Form/SelectField";
import Checkbox from "components/Form/Checkbox";

import iconSearch from "assets/icons/iconSearch.svg";
import iconFilter from "assets/icons/iconFilter.svg";
import iconImport from "assets/icons/import.svg";
import iconExport from "assets/icons/export.svg";
import noData from "assets/icons/No-data.svg";

import * as S from "./styled";
import TreeSelect from "../TreeSelect";

Table.propTypes = {
  data: PropTypes.string,
  placeholder: PropTypes.string,
  columns: PropTypes.any,
  title: PropTypes.string,
  set_per_page: PropTypes.any,
  per_page: PropTypes.any,
  total: PropTypes.number,
  set_page: PropTypes.any,
  page: PropTypes.number,
  set_filter: PropTypes.any,
  filter: PropTypes.bool,
  has_filter: PropTypes.bool,
  urlExport: PropTypes.string,
  paramsExport: PropTypes.object
};

function Table({
  data,
  columns,
  title,
  placeholder,
  set_filter,
  filter,
  //
  set_per_page,
  per_page,
  total,
  set_page,
  page,
  //
  set_subject,
  scroll,
  has_filter = true,
  hasImport,
  hasExport,
  hasTreeSelect,
  has_search = true,
  hasCheckBox = false,
  hasDelete = false,
  checked,
  onSelectAll,
  onDeleteAll,
  onChangeTree,
  urlExport,
  paramsExport
}) {
  const handleChangeSearch = _debounce(value => {
    set_subject(value);
  }, 400);
  const history = useHistory();

  useEffect(() => {
    set_page(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [per_page]);

  const handleExportFile = async () => {
    const respon = await request({
      url: urlExport,
      method: "GET",
      params: paramsExport
    });

    if (respon.status === 200) {
      window.open(`${ASSETS_URL}${respon.data.data}`);
    }
  };

  return (
    <>
      <S.Header>
        <S.Dflex
          gap="0px"
          style={{
            flexDirection: "column"
          }}
        >
          <S.Dflex
            className="reponsive-title"
            gap="28px"
            style={{ width: "100%" }}
          >
            {title && (
              <Heading1 $color="#EE9416" padding="0 0 18px 0">
                {title}
              </Heading1>
            )}
            {has_search && (
              <Input
                style={{ background: "#ffffff" }}
                $width="229px"
                placeholder={placeholder}
                icon={iconSearch}
                $isHeader
                onChange={e => handleChangeSearch(e.target.value)}
              />
            )}
            {hasTreeSelect && (
              <TreeSelect
                width="25vw"
                disabledParent={false}
                isMulti
                onChange={values => onChangeTree(values)}
              />
            )}
          </S.Dflex>
          <S.Dflex
            style={{
              width: "100%",
              display: "flex",
              gap: "24px",
              alignItems: "baseline"
            }}
          >
            {hasCheckBox && (
              <S.Dflex>
                <Checkbox
                  id="select-all"
                  label="Chọn tất cả"
                  checked={checked}
                  onChange={onSelectAll}
                />
              </S.Dflex>
            )}
            <S.Dflex>
              <Text isBold style={{ marginTop: "-15px" }}>
                Hiển thị
              </Text>
              <SelectField
                placeholder=""
                alignCenter
                isShowDropdownIndicator
                options={sizeOptions}
                onChange={selected => set_per_page(selected)}
                value={per_page}
                height={32}
                borderRadius="5px"
              />
            </S.Dflex>
            {hasDelete && (
              <S.Dflex>
                <S.DeleteButton onClick={onDeleteAll}>
                  <Text isBold $color="#fff">
                    XOÁ
                  </Text>
                </S.DeleteButton>
              </S.Dflex>
            )}
          </S.Dflex>
        </S.Dflex>
        <S.Dflex
          style={{
            flexDirection: "column",
            alignItems: "flex-end"
          }}
        >
          <S.Dflex style={{ gap: "0 27px" }}>
            {hasImport && (
              <S.Dflex
                onClick={() =>
                  history.push(generatePath(ROUTES_ADMIN.IMPORT_EMPLOYEE))
                }
                style={{
                  cursor: "pointer",
                  justifyContent: "flex-end"
                }}
              >
                <img src={iconImport} alt="" /> <Text isBold>Nhập</Text>
              </S.Dflex>
            )}
            {hasExport && (
              <S.Dflex
                onClick={() => handleExportFile()}
                style={{
                  cursor: "pointer"
                }}
              >
                <img src={iconExport} alt="" /> <Text isBold>Xuất</Text>
              </S.Dflex>
            )}
            {has_filter && (
              <S.Dflex
                onClick={() => set_filter(true)}
                style={{
                  cursor: "pointer",
                  justifyContent: "flex-end"
                }}
              >
                <img src={iconFilter} alt="" />
                <Text isBold style={{ whiteSpace: "nowrap" }}>
                  Bộ lọc nâng cao
                </Text>
              </S.Dflex>
            )}
          </S.Dflex>
          <S.Dflex
            className="reponsive-pagination"
            gap="10px"
            style={{
              width: "20vw",
              justifyContent: "flex-end",
              marginTop: "10px"
            }}
          >
            <Text isBold>Trang</Text>
            <Pagination
              pageSize={per_page?.value}
              simple
              defaultCurrent={1}
              current={page}
              onChange={page => set_page(page)}
              total={total}
              size="small"
            />
          </S.Dflex>
        </S.Dflex>
      </S.Header>
      <S.WrapTable>
        <S.Table
          bordered
          pagination={false}
          columns={columns}
          dataSource={data}
          rowClassName={(_, index) => index % 2 === 0 && "table-row-dark"}
          style={{ borderRadius: "10px" }}
          rowKey={record => record.id}
          scroll={scroll}
          locale={{
            emptyText: (
              <span>
                <img src={noData} alt="" />
              </span>
            )
          }}
        />
      </S.WrapTable>
    </>
  );
}

export default Table;
