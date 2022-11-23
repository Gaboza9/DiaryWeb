import React from 'react'
import {useDrag} from "react-dnd"

function MyIcon({id,url}) {
    const [{isDragging}, drag] = useDrag(()=>({
        type: "item",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
  return (
    <>
    <i className={url} ref={drag}
        // style={{ border: isDragging ? "5px solid pink" : "0px" }}
        ></i>
    </>
  )
}

export default MyIcon