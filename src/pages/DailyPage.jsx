import KjwSidebar from '../components/Daily/kjwSidebar';
import KjwDate from '../components/Daily/kjwDate';
import KjwDiary from '../components/Daily/KjwDiary';
import { useState, useRef, useEffect } from 'react';
import {useRecoilState} from "recoil"
import targetsState from '../components/Daily/kjwStickerAtom';
import { PictureList } from './../components/Daily/pictureList';
import KjwDecoration from '../components/Daily/kjwDecoration';
import dayjs from "dayjs";
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

function DailyPage(){
    const bodyStyle = {
        display: "flex",
        height: "110vh",
        flexDirection: "row",
        fontFamily: "'Gamja Flower', cursive"
    }
    const mainStyle = {
        flexBasis:"100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        paddingBottom: "30px",
    }
    const TestStyle = styled.div`
        width:50px;
        height:50px;
        background: ${(props) => props?"white":"yellow"};
    `;

    // 날짜
    const [currentDate, setCurrentDate] = useState(dayjs(new Date()))
    const setLastDayListener = () => {
        setCurrentDate(currentDate.clone().subtract(1,"day"))
    }
    const setNextDayListener = () => {
        setCurrentDate(currentDate.add(1,"day"))
    }

    /*
    // 날짜 바뀔 때 마다 렌더링 되도록
    useEffect(() => {
        
    }, currentDate);
*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isDeco, setDeco] = useState(false)
    const changeDeco = (isDeco) => {
        setDeco(isDeco)
    }

    const [isWeather, setWeather] = useState(false)
    const changeWeather = (isWeather) => {
        setWeather(isWeather)
    }

    const [numPicture, setNumPicture] = useState(3);
    const changePicture=(n)=> {
        setNumPicture(n);
        console.log("main", numPicture);
    }

    //drop할 영역이 위치한 컴포넌트
    // recoil : 드래그할 요소들이 위치한 컴포넌트와 드랍할 타겟 영역이 위치한 컴포넌트가 달라서 전역 상태관리가 필요
    const stockContainer = useRef();
    const [targets, setTargets] = useRecoilState(targetsState);
    const [box, setBox] = useState({
        top:"", left:"", bottom:"", right:""
    });

    useEffect(() => {
        const box = stockContainer.current?.getBoundingClientRect?.();
        setBox({ // 드랍할 수 있는 영역의 위치정보
            top: box.top,
            left: box.left,
            bottom: box.top + box.height,
            right: box.left + box.width,
        });
    }, []);

    const [isImage, setIsImage] = useState(false)
    const [imageSrc, setImageSrc] = useState()
    const changeSetIsImage = (isImage) => {
        setIsImage(isImage)
        if(isImage === false)
            setImageSrc()
    }

    return (
        <div style={bodyStyle}>
            {show && <KjwSidebar 
                handleClose={handleClose} setTargets={setTargets} box={box} funcWeather={changeWeather} funcPicture={changePicture} picture={numPicture} funcDeco={changeDeco} isDeco={isDeco} funcImage={changeSetIsImage} isImage={isImage} funcImageSrc={setImageSrc}
                />
            
            }
            {!show && <Button 
                variant="light" onClick={handleShow}>편집</Button>
            }
            <div style={{display:"flex", flexBasis:"100%", flexDirection:"row", justifyContent:"center"}}>
                <div style={mainStyle} ref={stockContainer}>
                    <KjwDecoration targets={targets}/>
                    <KjwDate currentDate={currentDate} setLastDayListener={setLastDayListener} setNextDayListener={setNextDayListener}/>
                    <KjwDiary weather={isWeather} picture={numPicture} isEdit={isDeco} isImage={isImage} imageSrc={imageSrc}/>
                </div>
            </div>
        </div>
    );
}

export default DailyPage;