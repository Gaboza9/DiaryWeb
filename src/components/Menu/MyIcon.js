import React from 'react'
import {useDrag} from "react-dnd"

function MyIcon({id,url}) {
    const [{isDragging}, drag] = useDrag(()=>({
        type: "icon",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
  return (
    <i className={url} ref={drag}></i>
    
  )
}

export default MyIcon