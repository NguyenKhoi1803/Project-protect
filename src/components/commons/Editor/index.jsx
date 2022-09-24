import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import styled from "styled-components";

const Wrapper = styled.div`
  .ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
    height: 60vh;
  }

  .ck.ck-editor__main > .ck-editor__editable:not(.ck-blurred) {
    height: 60vh;
  }
`;

const Label = styled.div`
  color: #333333;
  font-size: ${({ theme }) => theme.fontSize.base};
  padding-bottom: 7px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

function Editor({ label, onChange, value, ...rest }) {
  return (
    <Wrapper className="ck-content">
      {label && (
        <div>
          <Label>{label}</Label>{" "}
        </div>
      )}
      <CKEditor
        editor={ClassicEditor}
        data={value?.toString()}
        onChange={onChange}
        config={{ mediaEmbed: { previewsInData: true } }}
      />
    </Wrapper>
  );
}

export default Editor;
