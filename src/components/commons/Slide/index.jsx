import React, { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { ReactSVG as SVG } from "react-svg";

import Button from "components/commons/Button";

import pre from "./images/prev.svg";
import next from "./images/next.svg";

import * as S from "./styled";

Slide.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  settings: PropTypes.object
};

function Slide({ data, title, settings }) {
  const slider = useRef();

  return (
    <S.Wrapper>
      {title && <S.Header>{title}</S.Header>}
      <div className="arrows">
        <div className="prev">
          <SVG
            src={pre}
            alt=""
            onClick={() => slider?.current?.slickPrev()}
          ></SVG>
        </div>
        <div className="next">
          <SVG
            src={next}
            alt=""
            onClick={() => slider?.current?.slickNext()}
          ></SVG>
        </div>
      </div>
      <Slider ref={slider} {...settings} style={{ borderRadius: "6.31px" }}>
        {data.map((item, index) => (
          <S.Card key={item.id}>
            <S.WrapImage>
              <S.Overlay>
                <Button $width="173.58px" $borderRadius="8px" $size="14px">
                  BẮT ĐẦU
                </Button>
              </S.Overlay>
              <img src={item.image} alt="" />
            </S.WrapImage>
          </S.Card>
        ))}
      </Slider>
    </S.Wrapper>
  );
}

export default Slide;
