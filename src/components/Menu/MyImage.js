import React from 'react'
import {useDrag} from "react-dnd"

function MyImage({id,url}) {
    const [{isDragging}, drag] = useDrag(()=>({
        type: "item",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <>
        <div className="px-3 py-3" style={{display:'inline-block'}}>
        <img src={url} ref={drag} width='70'/>
        </div>
        </>
    )
}

export default MyImage