import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { ASSETS_URL } from "constants/configs";

import request from "services/request";
import convertObjectToFormData from "utils/helpers/convertObjectToFormData";

import clear from "assets/icons/clear.svg";
import add from "containers/AdminPage/CreateQuestionPage/images/add.svg";
import { Text } from "components/commons/Typo";
import Image from "components/commons/Image";

import {
  RadioCustom,
  RadioGroupCustom,
  WrapAddImg,
  LabelRadio,
  Wrapper,
  Input,
  WrapImg
} from "./styled";

const RadioCreate = ({
  disabled,
  options,
  control,
  name,
  errorMessage,
  checked,
  setChecked,
  onChange,
  label,
  setidRemove,
  setInput,
  setIdAddInput,
  addImg,
  setAnswers,
  answers,
  setIndexes,
  ...rest
}) => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const [index, setIndex] = useState(null);
  const [mergedArr, setMergedArr] = useState([]);

  useEffect(() => {
    setData(options);
  }, [options]);

  const handleUploadAvatar = async e => {
    if (!e.target.files[0]?.name?.match(/\.(jpg|png)$/)) {
      return false;
    }

    const respon = await request({
      url: "/uploads/imageS3",
      method: "post",
      data: convertObjectToFormData({ image: e.target.files[0] })
    });
    if (respon.status === 200) {
      setImg([...img, respon.data.status]);
      e.target.value = "";
    }
  };

  const handleRemove = () => {
    setImg([]);
  };

  useEffect(() => {
    if (index !== null && img !== null) {
      const arr = options?.map((item, i) =>
        i === index
          ? { ...item, images: img }
          : { ...item, images: item?.images || [] }
      );
      setIndexes(arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img, index]);

  useEffect(() => {
    if (index !== null) {
      setImg([]);
    }
  }, [index]);

  useEffect(() => {
    if (data && answers) {
      const arr = data?.map((item, index) => ({ ...item, ...answers[index] }));
      setMergedArr(arr);
    }
  }, [data, answers]);

  return (
    <RadioGroupCustom onChange={onChange} defaultValue={1} {...rest}>
      {mergedArr?.map((item, i) => (
        <>
          <Wrapper key={i}>
            <LabelRadio>{i + 1}</LabelRadio>
            <RadioCustom value={item.value}>
              <Input
                onChange={e => setInput(e.target.value)}
                placeholder="Nhập câu trả lời"
                value={item.label}
                onFocus={() => setIdAddInput(i)}
                onBlur={() => {
                  setIdAddInput(null);
                  setInput(null);
                }}
              />
            </RadioCustom>
            {mergedArr?.length > 2 && item.correct !== 1 && (
              <img
                src={clear}
                alt=""
                onClick={() => {
                  setidRemove(item.value);
                }}
              />
            )}
          </Wrapper>{" "}
          {addImg && (
            <>
              <input
                id="uploadImg"
                onChange={handleUploadAvatar}
                type="file"
                className="d-none"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginLeft: item?.images?.length === 0 ? "0px" : "180px"
                }}
              >
                {item?.images?.length > 0 ? (
                  <WrapImg>
                    {item?.images?.map(img => (
                      <Image
                        src={`${ASSETS_URL}/${img}`}
                        width={64}
                        rightPlace="0px"
                        hasRemove
                        onRemove={handleRemove}
                      />
                    ))}
                  </WrapImg>
                ) : (
                  <WrapAddImg
                    onClick={() => setIndex(i)}
                    style={{
                      paddingLeft: item?.images?.length === 0 ? "100px" : "0px"
                    }}
                  >
                    <label htmlFor="uploadImg">
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          cursor: "pointer"
                        }}
                      >
                        <img src={add} alt="" />
                        <Text>
                          Hình ảnh <br />{" "}
                          <span style={{ color: "#888888", fontSize: "12px" }}>
                            Tối đa 1 ảnh, định
                            <br /> dạng jpg, png
                          </span>
                        </Text>
                      </div>
                    </label>
                  </WrapAddImg>
                )}
              </div>
            </>
          )}
        </>
      ))}
    </RadioGroupCustom>
  );
};

RadioCreate.propTypes = {
  options: PropTypes.array,
  disabled: PropTypes.bool,
  control: PropTypes.object,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  checked: PropTypes.bool,
  setChecked: PropTypes.func
};

export default RadioCreate;
