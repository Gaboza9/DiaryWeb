import { useState } from 'react';
import KjwPictureArray from './kjwPictureArray';
import KjwTemp from './kjwTemp';
import KjwWeatherList from './kjwWeatherList';
import { styled } from 'styled-components';
import ControlledCarousel from './controlledCarousel';

function KjwDiary(props) {
    const paperStyle = {
        display:"flex",
        flexDirection:"row",
        justifyContent: "center",
        flexWrap:"wrap"
    }
    const topStyle = {
        display: "flex",
        height: "64px",
        fontSize: "24px",
        color: "black",
        flexDirection: "row",
        backgroundColor:"#ffffff00",
    }
    const titleStyle = {
        flexGrow:"1",
        height: "64px",
        border: "1px solid #C8C8C8",
        backgroundColor:"#ffffff00",
        fontWeight: "600",
        fontSize: "28px",
        paddingLeft: "12px",
        textAlign: "center"
    }
    const contentStyle ={
        width: "100%",
        height: "362px",
        border: "1px solid #C8C8C8",
        backgroundColor:"#ffffff00",
        fontSize: "21px",
        padding: "12px"
    }
    

    return(
        <div style={paperStyle}>
            <div style={{flexBasis:"900px"}}>
                <div style={topStyle}>
                    <input disabled={props.isEdit} className="kjw_top1_div" style={titleStyle} placeholder='제목을 적어주세요.'/>
                    {(props.weather) && <KjwWeatherList/>}
                </div>
                <textarea disabled={props.isEdit} style={contentStyle} placeholder='내용을 적어주세요.'/>
                <ControlledCarousel/>
            </div>
            {(props.picture!=0) &&  <div>
                <KjwPictureArray num={props.picture}/>
            </div>}
        </div>
    );
}
export default KjwDiary;