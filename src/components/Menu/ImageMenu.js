import Picture from './Picture';
import React, { useState} from 'react'
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


function ImageMenu() {
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
    <>
    <section className="item">
      {PictureList.map((picture) => {
        return <Picture url={require(`../../img/${picture.url}.png`)} id={picture.id} />;
      })}
    </section>
  </>
  )
}

export default ImageMenu