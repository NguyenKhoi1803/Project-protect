import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Text } from "../Typo";

import prev from "./images/prev.svg";
import next from "./images/next.svg";

import * as S from "./styled";

function PdfReader({
  file,
  prePage,
  nextPage,
  currPage,
  onSuccess,
  totalPage,
  ...rest
}) {
  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <S.Wrapper>
      <Text>
        Trang {currPage} / {totalPage}
      </Text>
      <Document
        className="pdf"
        file={file}
        options={options}
        onLoadSuccess={onSuccess}
      >
        <Page className="page" pageNumber={currPage} />
      </Document>

      <S.WrapButton>
        <img src={prev} alt="" onClick={prePage} />
        <img src={next} alt="" onClick={nextPage} />
      </S.WrapButton>
    </S.Wrapper>
  );
}

export default PdfReader;
