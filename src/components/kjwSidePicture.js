import { useState } from 'react';

function KjwSidePicture(props) {
    const [numPicture, setNumPicture] = useState(3);
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
        props.funcPicture(numPicture);
        console.log("side", numPicture)
    }

    return (
        <div className="side">
            {numPicture}
            <button onClick={() => changeListener("add")}>+</button>
            <button onClick={() => changeListener("sub")}>-</button>
        </div>
    );
}
export default KjwSidePicture;