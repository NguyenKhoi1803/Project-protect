import React, { forwardRef } from "react";
import dropSelect from "assets/icons/dropSelect.svg";
import PropTypes from "prop-types";
import Select, { components } from "react-select";

import * as S from "./styled";

const SelectField = (
  {
    isMulti,
    required = false,
    height = 44,
    error,
    minHeight,
    label,
    menuPlacement = "bottom",
    options,
    placeholder,
    alignCenter = false,
    className,
    width,
    borderRadius,
    pd = false,
    isShowDropdownIndicator = true,
    id = Math.random().toString(36).substring(2, 12),
    defaultValue,
    keyword,
    disabled,
    ...rest
  },
  ref
) => {
  const Option = ({ children, ...rest }) => (
    <components.Option {...rest}>
      <S.OptionWrapper>{children}</S.OptionWrapper>
    </components.Option>
  );

  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      <img src={dropSelect} alt="" />
    </components.DropdownIndicator>
  );

  const customStyles = {
    indicatorSeparator: provided => ({
      ...provided,
      display: "none"
    }),

    menu: provided => ({
      ...provided,
      // borderRadius: borderRadius || '0px',
      ...(alignCenter ? { display: "flex", justifyContent: "center" } : {})
    }),

    menuList: provided => ({
      ...provided,
      borderShadow: "0px 2px 4px rgba(48, 48, 48, 0.25)",
      // borderTopLeftRadius: borderRadius || '0px',
      // borderTopRightRadius: borderRadius || '0px',
      border: "none"
    }),

    control: (provided, { isFocused, isSelected }) => ({
      ...provided,
      width,
      borderRadius: borderRadius || "0px",
      boxShadow: "none",
      menuIsOpen: !isSelected,
      minHeight: minHeight || height,
      fontSize: "14px",
      paddingRight: "14px",
      // eslint-disable-next-line no-nested-ternary
      border: `1px solid ${error ? "#BC0000" : "#E7E7E7;"}`,
      "&:hover": {}
    }),

    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #F2F2F2",
      padding: "10px",
      background: state.isSelected ? "#E0E0E0" : "none",
      color: "#333",
      fontSize: "14px",
      "&:hover": {
        background: state.isSelected ? "" : "rgba(200,200,200,.1)"
      },
      ...(alignCenter ? { display: "flex", justifyContent: "center" } : {})
    }),

    clearIndicator: provided => ({
      ...provided,
      padding: 0,
      marginRight: "8px"
    }),

    valueContainer: provided => ({
      ...provided,
      padding: "2px 0px 2px 14px",
      ...(alignCenter ? { display: "flex", justifyContent: "center" } : {})
    }),

    multiValue: provided => ({
      ...provided,
      borderRadius: borderRadius || "0px",
      background: "#E0E0E0",
      overflow: "hidden"
    }),

    multiValueLabel: styles => ({
      ...styles,
      color: "white",
      background: "#EE9416",
      padding: "8px",
      borderRadius: 0
    }),

    dropdownIndicator: (base, { isFocused }) => ({
      ...base,
      transform: isFocused ? "rotate(180deg)" : "none",
      display: isShowDropdownIndicator ? "" : "none"
    }),

    multiValueRemove: styles => ({
      ...styles,
      borderLeft: "1px solid rgba(255,255,255,.4)",
      cursor: "pointer",
      color: "white",
      background: "#EE9416",

      ":hover": {
        color: "#333"
      }
    }),

    placeholder: defaultStyles => ({
      ...defaultStyles,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.02em",
      color: "#B5B5B5"
    })
  };

  return (
    <S.SelectWrapper className={className} pd={pd}>
      {label && (
        <div>
          <S.Label htmlFor={id}>
            {label} {required && <S.Required>(*)</S.Required>}
          </S.Label>{" "}
        </div>
      )}

      <Select
        id={id}
        closeMenuOnSelect={!isMulti}
        isMulti={isMulti}
        styles={customStyles}
        options={options}
        menuPlacement={menuPlacement}
        components={{ Option, DropdownIndicator }}
        hideSelectedOptions={false}
        inputRef={ref}
        placeholder={placeholder}
        defaultValue={defaultValue}
        noOptionsMessage={() => `CHƯA CÓ DANH SÁCH ${keyword.toUpperCase()}`}
        isDisabled={disabled}
        {...rest}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.SelectWrapper>
  );
};

SelectField.propTypes = {
  isMulti: PropTypes.bool,
  required: PropTypes.bool,
  height: PropTypes.number,
  error: PropTypes.string,
  minHeight: PropTypes.string,
  label: PropTypes.string,
  menuPlacement: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isShowDropdownIndicator: PropTypes.bool,
  alignCenter: PropTypes.bool,
  id: PropTypes.string,
  defaultValue: PropTypes.any,
  keyword: PropTypes.string,
  disabled: PropTypes.bool
};

export default forwardRef(SelectField);
