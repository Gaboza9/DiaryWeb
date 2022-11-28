import React from 'react'
import {useDrag} from "react-dnd"

function MyImage({id,url}) {
    const [{isDragging}, drag] = useDrag(()=>({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <>
        <div style={{display:'inline-block'}}>
        <img src={url} ref={drag} width='70'/>
        </div>
        </>
    )
}

export default MyImage