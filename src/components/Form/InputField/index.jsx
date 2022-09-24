import React from "react";
import PropTypes from "prop-types";
// import imgSearch from '@/images/img-search.png';
import * as S from "./styled";

Input.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  icon: PropTypes.any,
  iconPass: PropTypes.any,
  register: PropTypes.func,
  name: PropTypes.string,
  textArea: PropTypes.bool,
  isSearch: PropTypes.bool,
  heightTextArea: PropTypes.string,
  heightInput: PropTypes.string,
  widthtInput: PropTypes.string,
  className: PropTypes.string,
  $paddingBottom: PropTypes.string,
  borderRadius: PropTypes.string,
  id: PropTypes.string,
  isHeader: PropTypes.bool,
  set_show: PropTypes.func,
  show: PropTypes.bool,
  fullWidth: PropTypes.bool,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  typeNumber: PropTypes.bool,
  dfValue: PropTypes.string
};

// generate random string id if not fill id
function Input({
  label = "",
  isHeader,
  required = false,
  error,
  icon,
  iconPass,
  register = () => {},
  name,
  heightInput,
  textArea = false,
  heightTextArea,
  className,
  widthInput,
  $paddingBottom,
  borderRadius,
  set_show,
  show,
  fullWidth = false,
  id = Math.random().toString(36).substring(2, 12),
  value,
  disabled,
  placeholder,
  typeNumber = false,
  dfValue,
  ...rest
}) {
  return (
    <S.InputWrapper
      className={className}
      $paddingBottom={$paddingBottom}
      fullWidth={fullWidth}
    >
      {label && (
        <div>
          <S.Label htmlFor={id}>
            {label} {required && <S.Required>(*)</S.Required>}
          </S.Label>{" "}
        </div>
      )}
      <div
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center"
        }}
      >
        {icon && <S.Icon src={icon} alt="icon" />}
        {textArea ? (
          <S.TextArea
            defaultValue={dfValue}
            type={typeNumber && "number"}
            $error={error}
            {...register(name)}
            name={name}
            $height={heightTextArea}
            autoComplete="off"
            $borderRadius={borderRadius}
            id={id}
            $width={widthInput}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            {...rest}
          />
        ) : (
          <S.Input
            defaultValue={dfValue}
            type={typeNumber && "number"}
            $error={error}
            {...register(name)}
            name={name}
            $height={heightInput}
            $width={widthInput}
            autoComplete="off"
            id={id}
            $hasIcon={!!icon}
            $borderRadius={borderRadius}
            $isHeader={isHeader}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            {...rest}
          />
        )}
        {iconPass && (
          <S.IconPass
            src={iconPass}
            alt="icon"
            onClick={() => set_show(!show)}
          />
        )}
      </div>

      {error && <S.Error>{error}</S.Error>}
    </S.InputWrapper>
  );
}

export default Input;
