import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/named

import Image from "components/commons/Image";

import { ASSETS_URL } from "constants/configs";
import {
  RadioCustom,
  RadioGroupCustom,
  ErrorMessage,
  LabelRadio
} from "./styled";

const Radio = ({
  group,
  valueItem,
  disabled,
  options,
  control,
  name,
  errorMessage,
  checked,
  setChecked,
  onChange,
  label,
  hasLabel = true,
  isDisabled,
  defaulValue,
  value,
  ...rest
}) => {
  if (group) {
    return (
      <>
        {hasLabel && <LabelRadio>{label}</LabelRadio>}
        <RadioGroupCustom
          onChange={onChange}
          defaultValue={defaulValue}
          value={value}
          disabled={disabled}
        >
          {options?.map((item, i) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline"
              }}
            >
              {item?.image && (
                <div style={{ width: "180px" }}>
                  <Image src={`${ASSETS_URL}/${item.image[0]}`} />
                </div>
              )}

              <RadioCustom
                key={i}
                value={item.value}
                disabled={isDisabled === item.value}
              >
                {item.label}
              </RadioCustom>
            </div>
          ))}
        </RadioGroupCustom>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }

  return (
    <>
      <RadioCustom
        disabled={disabled}
        value={valueItem}
        checked={checked}
        onClick={() => setChecked(!checked)}
        {...rest}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

Radio.propTypes = {
  group: PropTypes.bool,
  valueItem: PropTypes.any,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  control: PropTypes.object,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
  hasLabel: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default Radio;
