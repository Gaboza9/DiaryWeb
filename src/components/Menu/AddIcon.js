import React, {useState} from 'react'
import {useDrop} from 'react-dnd'
import MyIcon from './MyIcon'

function AddIcon({days }) {
       
    const EmotionList = [ { id:1, url:"bi bi-emoji-angry fs-1"},
                        { id:2, url:"bi bi-emoji-dizzy fs-1"},
                        { id:3, url:"bi bi-emoji-expressionless fs-1"},
                        { id:4, url:"bi bi-emoji-frown fs-1"},
                        { id:5, url:"bi bi-emoji-heart-eyes fs-1"},
                        { id:6, url:"bi bi-emoji-laughing fs-1"},
                        { id:7, url:"bi bi-emoji-neutral fs-1"},
                        { id:8, url:"bi bi-emoji-smile fs-1"},
                        { id:9, url:"bi bi-emoji-smile-upside-down fs-1"},
                        { id:10, url:"bi bi-emoji-sunglasses fs-1"},
                        { id:11, url:"bi bi-emoji-wink fs-1"}];

    const [board, setBoard] = useState([]);

    const [{isOver},drop] = useDrop(()=>({
      accept: "icon",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    const addImageToBoard = (id) => {
      const emotionList = EmotionList.filter((picture) => id === picture.id);
      setBoard([emotionList[0]]);
    };

    
  return (
    <div className="Board" ref={drop}>
    <span class="px-1 py-1">
        {days.format('D') }</span>
        {console.log(board)}
        {board.map((emotion)=> {
            return  <MyIcon url={emotion.url} id={emotion.id}/>;
        })}
    </div>
  )
}

export default AddIcon