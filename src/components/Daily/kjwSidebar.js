import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import KjwSide from './kjwSide';
import KjwDragDrop from './kjwDragDrop';
import KjwImageBar from './kjwImageBar';

function KjwSidebar(props) {
    const sidebarStyle = {
        display: 'flex',
        flexDirection: 'row',
        height:'100%',
        backgroundColor:"#ffffff",
        paddingTop: "20px",
        paddingBottom: "30px"
    }
    
    /*
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    */

    /*
    <Button variant="light" onClick={handleShow} 
                style={{position:'absolute', left:'30px', top:'100px', fontSize:'14px', fontFamily: "'Nanum Gothic', sans-serif"}}>
                편집
            </Button>
    <Offcanvas show={show} onHide={handleClose} style={{height:'100%'}}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>일기장 레이아웃 편집하기</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <KjwSide funcPicture={props.funcPicture}/>
                </Offcanvas.Body>
            </Offcanvas>
    */
    

    return (
        <div style={{borderRight:"1px solid grey"}}>
            <div style={sidebarStyle}>
                
                <KjwSide funcPicture={props.funcPicture} funcWeather={props.funcWeather} funcDeco={props.funcDeco} funcImage={props.funcImage}/>
                {props.isImage &&
                    <KjwImageBar funcImageSrc={props.funcImageSrc} picture={props.picture}/>
                }
                
                {props.isDeco && 
                    <KjwDragDrop setTargets = {props.setTargets} box={props.box}/>
                }
                
            </div>
        </div>
    );
}

export default KjwSidebar;