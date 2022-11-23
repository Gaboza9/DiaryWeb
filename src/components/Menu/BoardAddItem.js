import React, {useState} from 'react'
import Picture from './Picture';
import {useDrop} from 'react-dnd'

function BoardAddItem({days}) {
       
    const PictureList = [ { id:1, url:"오둥이1"},
                { id:2, url:"오둥이2"},
                { id:3, url:"오둥이3"},
                { id:4, url:"오둥이4"},
                { id:5, url:"오둥이5"},
                { id:6, url:"오둥이6"},
                { id:7, url:"오둥이7"},
                { id:8, url:"오둥이8"},
                { id:9, url:"오둥이9"}]

    const [board, setBoard] = useState([]);

    const [{isOver},drop] = useDrop(()=>({
      accept: "image",
      drop: (item) => addItemToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    const addItemToBoard = (id) => {
        if(item==="image"){
            const pictureList = PictureList.filter((picture) => id === picture.id);
            setBoard([pictureList[0]]);
        }
        else{
            const EmotionList = EmotionList.filter((picture) => id === picture.id);
            setBoard([EmotionList[0]]);
        }
    };

    const choiceItem = () => {
        if(item==="image"){
            board.map((picture) => {
            return <Picture url={require(`../../img/${picture.url}.png`)} id={picture.id} />;})
        }
        else{
          board.map((picture) => {
            return <Picture url={require(`../../img/${picture.url}.png`)} id={picture.id} />;})
        }
    }
    
  return (
    <div className="Board" ref={drop}>
       <span class="px-1 py-1"> {days.format('D') }</span>
       {choiceItem}
    </div>
  )
}
}

export default BoardAddItem