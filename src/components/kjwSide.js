import { useState } from 'react';

function KjwSide(props) {
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
    const setSide = () => {
        funcPicture(numPicture);
    }

    return (
        <div className="kjw_side">
            날씨
            <div className='side_div_weather'>
                
            </div>

            사진
            <div className='side_div_picture'>
                <p style={{width:'250px', textAlign:'center'}}>{numPicture}</p>
                <div>
                    <button onClick={() => changeListener("add")}>+</button>
                    <button onClick={() => changeListener("sub")}>-</button>
                </div>
            </div>
            
            <button onClick={setSide}>완료</button>
        </div>
    );
}
export default KjwSide;