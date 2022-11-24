import React, { useState } from "react";

function ImageUpload() {
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage =  () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <>
      {/* <h1>이미지 미리보기</h1> */}
      <table>
        <tbody>
          <tr>
            {/* <th>이미지</th> */}
            <td>
              <div>
                {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto"}}
                    width='90'
                  />
                )}
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ImageUpload;