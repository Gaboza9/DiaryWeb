import { useState, useEffect } from 'react';
import Toggle from './toggle';
import AddImage from './../Menu/AddImage';

function KjwSide(props) {
    const wrapStyle= {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        fontFamily: "'Nanum Gothic', sans-serif",
        borderRight:"1px solid black"
    }
    const divStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent:"flex-end",
        marginBottom: "30px",
        paddingLeft:"10px",
        paddingRight:"10px"
    }
    const divPictureStyle = {
        display: "flex",
        flexDirection: "row",
    }
    const btnStyle = {
        width: "30px",
        height:"30px"
    }

    const {funcPicture} = props;
    const [numPicture, setNumPicture] = useState(0);
    const changeListener = (value) => {
        if(value === "add"){
            if(numPicture < 3)
                setNumPicture(numPicture+1);
        }
        else if (value === "sub"){
            if(numPicture > 0)
                setNumPicture(numPicture-1);
        }
    }

    useEffect(() => {
        funcPicture(numPicture);
    },[numPicture])
    useEffect(() => {
        funcPicture(numPicture);
    },[numPicture])
    // const setSide = () => {
    //     funcPicture(numPicture);
    // }

    //<button onClick={setSide}>완료</button>
    // 

    const [diaryImg, setDiaryImg] = useState([]);

    const addImage = e => {
        const nowSelectImageList = e.target.files;
        const nowImageURLList = [...diaryImg];
        for(let i=0; nowSelectImageList.length; i++){
            const nowImageUrl = URL.createObjectURL(nowSelectImageList)
            nowImageURLList.push(nowImageUrl)
        }
        setDiaryImg(nowImageURLList)
    }

    return (
        <div style={wrapStyle}>
            <div style={divStyle}>
                <div style={{flexGrow:'1'}}>날씨</div>
                <Toggle listener={props.funcWeather}/>
            </div>
            
            <div style={divStyle}>
                <div style={{flexGrow:'1'}}>사진</div>
                <div style={divPictureStyle}>
                    <button style={btnStyle} onClick={() => changeListener("add")}>+</button>
                    <span style={{width:'50px', textAlign:'center'}}>{numPicture}</span>
                    <button style={btnStyle} onClick={() => changeListener("sub")}>-</button>
                </div>
            </div>

            <div>
                <label
                    htmlFor="input-file"
                    className="sideInputImage"
                    onChange={addImage}
                >사진 올리기
                    <input
                        type="file"
                        multiple="multiple"
                        id="input-file"
                        style={{display:'none'}}
                        accept=".jpg, .jpeg, .png"
                    />
                </label>
            </div>
            
            <div style={divStyle}>
                <div style={{flexGrow:'1'}}>꾸미기</div>
                <Toggle listener={props.funcDeco}/>
            </div>

            <button>완료</button>
            
        </div>
    );
}
export default KjwSide;