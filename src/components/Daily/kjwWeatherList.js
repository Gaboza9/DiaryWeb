
import { useState } from "react";
import KjwWeather from "./kjwWeather";

function KjwWeatherList(){
    const weatherStyle = {
        display:"flex",
        flexBasis:"40%",
        height: "100%",
        border: "1px solid #C8C8C8",
        justifyContent: "space-between"
    }
    const weatherArray = ['sunny', 'cloud', 'rain', 'snow', 'thunder'];
    const [isWeatherSelect, setSelect] = useState(false);
    const selectListener = (idx) => {
        const newArr = Array(weatherArray.length).fill(false);
        newArr[idx] = true;
        setSelect(newArr);
    }

    return (
        <div className="kjw_top1_div" style={weatherStyle}>
            <span style={{fontSize:"24px", whiteSpace: "nowrap"}}>날씨</span>
            {weatherArray.map((item, index) => {
                return(
                    <KjwWeather
                        key = {index}
                        isSelected={isWeatherSelect[index]}
                        selectListener = {selectListener}
                        elementIndex = {index}
                        content={item}
                    />
                )
            })}
        </div>
    );
}

export default KjwWeatherList;