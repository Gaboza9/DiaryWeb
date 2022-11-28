import React from 'react'
import MyIcon from './MyIcon';
import {useDrag} from "react-dnd"

function LocalIcon(key) {
    const id = localStorage.getItem(key.days+"EId");
    const icon = localStorage.getItem(key.days+"Icon");

    const useConfirm = (message = null, onConfirm, onCancel) => {
        if (!onConfirm || typeof onConfirm !== "function") {
          return;
        }
        if (onCancel && typeof onCancel !== "function") {
          return;
        }
      
        const confirmAction = () => {
          if (window.confirm(message)) {
            onConfirm();
          } else {
            onCancel();
          }
        };
      
        return confirmAction;
      };
      const deleteConfirm= () => { 
      localStorage.removeItem(key.days+"EId");
      localStorage.removeItem(key.days+"Icon");
        window.location.reload();};
      const cancelConfirm = () => console.log("취소했습니다.");
      const confirmDelete = useConfirm(
        "기분을 삭제하시겠습니까?",
        deleteConfirm,
        cancelConfirm
      );

      const [{isDragging}, drag] = useDrag(()=>({
        type: "icon",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    if(icon){
        return (
            <div class="fs-6 mx-2 px-1 mt-1" style={{display:'inline-block'}}>
            <i className={icon} style={{color:'Salmon'}} ref={drag} onContextMenu={confirmDelete}></i>
            </div>
        )
    }  
}

export default LocalIcon