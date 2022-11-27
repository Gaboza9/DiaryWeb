import React, {useState} from 'react'
import Picture from './Picture';
import {useDrop} from 'react-dnd'
import AddText from './AddText';
import LocalImage from './LocalImage'
import LocalIcon from './LocalIcon'
import AddIcon from './AddIcon';
       
const PictureList = [ { id:1, url:"오둥이1"},
{ id:2, url:"오둥이2"},
{ id:3, url:"오둥이3"},
{ id:4, url:"오둥이4"},
{ id:5, url:"오둥이5"},
{ id:6, url:"오둥이6"},
{ id:7, url:"오둥이7"},
{ id:8, url:"오둥이8"},
{ id:9, url:"오둥이9"}]

const EmotionList = [ { id:1, url:"bi bi-emoji-angry fs-5"},
{ id:2, url:"bi bi-emoji-dizzy fs-5"},
{ id:3, url:"bi bi-emoji-expressionless fs-5"},
{ id:4, url:"bi bi-emoji-frown fs-5"},
{ id:5, url:"bi bi-emoji-heart-eyes fs-5"},
{ id:6, url:"bi bi-emoji-laughing fs-5"},
{ id:7, url:"bi bi-emoji-neutral fs-5"},
{ id:8, url:"bi bi-emoji-smile fs-5"},
{ id:9, url:"bi bi-emoji-smile-upside-down fs-5"},
{ id:10, url:"bi bi-emoji-sunglasses fs-5"},
{ id:11, url:"bi bi-emoji-wink fs-5"}];

function AddImage({days, today}) {
    const [board, setBoard] = useState([]);
    const key = days.format('YYYYMMDD');

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
      localStorage.setItem(key+"Url", pictureList[0].url);
      localStorage.setItem(key+"PId", pictureList[0].id);
    };



    const [board2, setBoard2] = useState([]);

    const [{isOver2},drop2] = useDrop(()=>({
      accept: "icon",
      drop: (item) => addImageToBoard2(item.id),
      collect: (monitor) => ({
        isOver2: !!monitor.isOver(),
      }),
    }));
  
    const addImageToBoard2 = (id) => {
      const emotionList = EmotionList.filter((picture) => id === picture.id);
      setBoard2([emotionList[0]]);
      localStorage.setItem(key+"Icon", emotionList[0].url);
      localStorage.setItem(key+"EId", emotionList[0].id);
    };


    const IsToday =()=>{
      if(today){
        return(
          <span class="px-1 py-1 align-top" style={{backgroundColor: 'rgb(211, 74, 109)', color:'aliceblue'}}>
            {days.format('D')}</span>
        )
      }else{
        return(
          <span class="px-1 py-1 align-top" style={{fontSize:'18px'}} >
            {days.format('D') }</span>
        )
    }
  }

    
  return (

    <td key={days.format('YYYYMMDD')} className="Board" ref={drop2}>
      <div ref={drop}>
    <div class="mt-2 mx-2">
    {IsToday()}
    </div>
    {/* <i class="bi bi-circle fs-6 mx-2 px-1 mt-1" style={{color:'grey'}}></i> */}
    <LocalIcon  days={key}/>
    <LocalImage days={key}/>
    <div class="text-center">
      <AddText day ={days.format('YYYY-MM-DD')}/>
    </div></div>
  </td>
  )
}

export default AddImage