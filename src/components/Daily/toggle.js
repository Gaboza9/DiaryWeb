import styled,{css} from "styled-components";
import { useState, useEffect } from 'react';

function Toggle(props) {
    const ToggleBtn = styled.button`
        width: 70px;
        height: 35px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        background-color: ${(props) => (!props.toggle ? "none" : "rgb(51,30,190)")};
        position: relative;
        display: flex;
        flexDirection:row;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease-in-out;
    `;
    const Circle = styled.div`
        background-color: white;
        width: 22px;
        height: 22px;
        border-radius: 50px;
        position: absolute;
        left: 5%;
        transition: all 0.5s ease-in-out;
        ${(props) =>
        props.toggle &&
        css`
            transform: translate(38px, 0);
            transition: all 0.5s ease-in-out;
        `}
    `;

    const [toggle, setToggle] = useState(false);
    const clickedToggle = () => {
        setToggle((prev) => !prev);
    };

    useEffect(() => {
        props.listener(toggle);
    },[toggle])

    return (
        <ToggleBtn onClick={clickedToggle} toggle={toggle}>
                <Circle toggle={toggle} />
        </ToggleBtn>
    );
}

export default Toggle;