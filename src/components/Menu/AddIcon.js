import React, {useState} from 'react'
import {useDrop} from 'react-dnd'
import MyIcon from './MyIcon'
import AddText from './AddText'

function AddIcon(key) {  

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
      localStorage.setItem(key+"IconId", emotionList[0].id);
      localStorage.setItem(key+"Icon", emotionList[0].url);
      setBoard([emotionList[0]]);
    };

  

  return (
    // <td key={days.format('YYYYMMDD')} className="Board" ref={drop}>
    //   <div class="my-2 mx-2">
    //   {IsToday()}
    //   </div>
    //   <div class="text-center">
    //   {board.map((emotion)=> {
    //         return  <MyIcon url={emotion.url} id={emotion.id}/>;
    //     })}
    //   </div>
    //   <div class="text-center">
    //     <AddText day ={days.format('YYYY-MM-DD')}/>
    //   </div>
    // </td>
    <div>icon</div>
  )
}

export default AddIcon