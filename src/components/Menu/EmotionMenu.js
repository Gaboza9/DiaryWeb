import React, {useState} from 'react';
import MyIcon from './MyIcon';
import {useDrop} from 'react-dnd';

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
                        { id:11, url:"bi bi-emoji-wink fs-1"}

                        
]
function EmotionMenu() {
    const [content,setContent] = useState();

  return (
    <>
        <section className="Emtion">
        {EmotionList.map((emotion)=> {
            return (
                <>
                <div className="mx-2 my-2 px-3 py-3" style={{display:'inline-block'}}>
                <MyIcon url={emotion.url} id={emotion.id} onClick={()=>setContent("add")}/>
                </div>
                </>
            )
        })}
        </section>
    </>
  )
}

export default EmotionMenu