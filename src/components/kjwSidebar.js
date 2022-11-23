import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import KjwSide from './kjwSide';

function KjwSidebar(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow} style={{height:'10%'}}>
                Edit
            </Button>

            <Offcanvas show={show} onHide={handleClose} style={{height:'100%'}}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>일기장 레이아웃 편집하기</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <KjwSide funcPicture={props.funcPicture}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default KjwSidebar;