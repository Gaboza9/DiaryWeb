
import {atom} from "recoil"
import {useRecoilState} from "recoil"
import { useRef, useEffect, useState } from 'react';
import targetsState from './kjwStickerAtom';
import { PictureList } from "./pictureList";

// onDragStart, onDrag, onDragEnd에서 호출되는 함수에서 다 필요하기 때문에 함수 바깥에 전역 scope로 선언해줌
    // 드래그하며 커서가 이동할 때마다 위치를 잡아서 계산해줘야함. 그 위치를 시시각각 담을 수 있는 변수가 필요
    let posX = 0;
    let posY = 0;
    // 드래그 끝났을 때 요소를 원래 위치로 돌려놓기 위해 기존의 요소 left, top 좌표를 저장해 놓은 것.
    let originalX = 0;
    let originalY = 0;

function KjwDragDrop(props){
    const wrapStyle={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"150px"
    }

    // onDragStart : 드래그 시작하는 순간 실행.
    const dragStratHandler = e => {
        const img = new Image();
        e.dataTransfer.setDragImage(img,0,0); // 요소 반투명하게 따라오는거 없앰

        posX = e.clientX; // 드래그 시작 시 커서의 위치
        posY = e.clientY;

        originalX = e.target.offsetLeft; // 드래그하던 요소 드랍했을때 그 자리에 그대로 있게
        originalY = e.target.offsetTop;
        console.log("시작")
        console.log("타겟은",e.target.alt)
        console.log("box Left:", props.box.left," box top:",props.box.top)
    }

    // onDrag : 드래그 중일 때 실행되는 이벤트. onDragStart 직후부터 onDragEnd 직전까지 계속 호출
    const dragHandler = e => { // 현재 요소의 좌표(left,top) + 현재 커서의 좌표 - 직전 커서의 좌표
        e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
        e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
    }

    // onDragEnd : 마우스를 놓았을 때 드래그가 끝나면서 실행되는 이벤트.
    const dragEndHandler = e => {
        if ( // 커서가 원하는 영역 안에 들어오면
            props.box.left < e.clientX &&
            e.clientX < props.box.right &&
            props.box.top < e.clientY &&
            e.clientY < props.box.bottom
        ) { // 커서가 타겟 영역에 들어왔으면, 드랍 당시 요소의 위치(top,left)와 드래그한 요소에 따라 관련된 데이터를 저장해서 새로운 요소 생성
            console.log("영역 내")
            props.setTargets(targets => {
                const newTargets = [...targets];
                
                newTargets.push({
                    id: parseInt(e.timeStamp),
                    top: e.target.offsetTop + e.clientY - posY,
                    left: e.target.offsetLeft + e.clientX - posX,
                    detail: e.target.alt
                });
                console.log("타겟 ", targets)
                return newTargets;
            });
        } else{console.log("영역 밖")}
        // 요소를 onDrag에서 저장해 둔 원래 위치로 돌려놓기
        e.target.style.left = `${originalX}px`;
        e.target.style.top = `${originalY}px`;
        console.log("놓여짐")
    }

    const onDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div style={wrapStyle}>
            {PictureList.map((n, index) =>{
                return(
                    <img
                        key={index}
                        src={require(`../../img/${n.url}.png`)}
                        alt={`img/${n.url}.png`}
                        style={{width:"120px",height:"120px",marginBottom:"20px"}}

                        draggable
                        onDragStart = {(e)=>dragStratHandler(e)}
                        onDrag = {(e)=>dragHandler(e)}
                        onDragEnd = {(e)=>dragEndHandler(e)}
                        onDragOver = {(e)=>onDragOver(e)}
                    /> 
                )
            })}
        </div>
    );

}
export default KjwDragDrop;
