import React, {useState} from 'react'
import Picture from './Picture';
import {useDrop} from 'react-dnd'
       
const PictureList = [ { id:1, url:"오둥이1"},
{ id:2, url:"오둥이2"},
{ id:3, url:"오둥이3"},
{ id:4, url:"오둥이4"},
{ id:5, url:"오둥이5"},
{ id:6, url:"오둥이6"},
{ id:7, url:"오둥이7"},
{ id:8, url:"오둥이8"},
{ id:9, url:"오둥이9"}]

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

function AddImage({days}) {
    const [board, setBoard] = useState([]);

    const [{isOver},drop] = useDrop(()=>({
      accept: "image",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    const addImageToBoard = (id) => {
      const pictureList = PictureList.filter((picture) => id === picture.id);
      setBoard([pictureList[0]]);
    };

    
  return (
    <div className="Board" ref={drop}>
       <span class="px-1 py-1"> {days.format('D') }</span>
        {board.map((picture) => {
        return <Picture url={require(`../../img/${picture.url}.png`)} id={picture.id} />;
        })}
    </div>
  )
}

export default AddImage