import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { propTypes } from 'react-bootstrap/esm/Image';

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    /*
    <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    */
    return (
        <Carousel onSelect={handleSelect} style={{backgroundColor:"#c8c8c8"}}>
        <Carousel.Item style={{ display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <img
                className="d-block w-50"
                src={props.imageSrc}
                alt="사진을 넣어주세요."
                style={{textAlign:"center"}}
            />
        </Carousel.Item>
        
        </Carousel>
    );
}

export default ControlledCarousel;