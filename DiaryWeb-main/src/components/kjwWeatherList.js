
import { useState } from "react";
import KjwWeather from "./kjwWeather";

function KjwWeatherList(){
    const weatherArray = ['sunny', 'cloud', 'rain', 'snow', 'thunder'];
    const [isWeatherSelect, setSelect] = useState(false);
    const selectListener = (idx) => {
        const newArr = Array(weatherArray.length).fill(false);
        newArr[idx] = true;
        setSelect(newArr);
    }

    return (
        <div className="weather">
            날씨
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