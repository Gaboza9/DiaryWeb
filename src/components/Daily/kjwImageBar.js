import { useState } from "react";

function KjwImageBar(props){
    const wrapStyle={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"150px"
    }

    const [diaryImg, setDiaryImg] = useState();
    const addImage = e => {
        setDiaryImg(URL.createObjectURL(e.target.files[0]));
        localStorage.setItem("diaryImg", URL.createObjectURL(e.target.files[0]));
        props.funcImageSrc(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <div style={wrapStyle}>
            <div>
                <label
                    htmlFor="file"
                    className="sideInputImage"
                    onChange={addImage}
                >사진 올리기
                    <input
                    name="imgUpload"
                    type="file"
                    id="file"
                    accept="image/*"
                    style={{display:'none'}}
                  />
                </label>
            </div>
            
            {diaryImg && (
                  <img
                    alt="sample"
                    src={diaryImg}
                    width='90'
                  />
                )}
        </div>
    );
}
export default KjwImageBar;