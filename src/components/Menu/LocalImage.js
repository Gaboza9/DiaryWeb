import React from 'react'
import MyImage from './MyImage';

function LocalImage(key) {
    const url = localStorage.getItem(key.days+"Url");
    const id = localStorage.getItem(key.days+"PId");

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
      const deleteConfirm= () => { localStorage.removeItem(key.days+"Url");
      localStorage.removeItem(key.days+"Id");
        window.location.reload();};
      const cancelConfirm = () => console.log("취소했습니다.");
      const confirmDelete = useConfirm(
        "이미지를 삭제하시겠습니까?",
        deleteConfirm,
        cancelConfirm
      );

    if(url){
        return (
            <div class="text-center" onContextMenu={confirmDelete}>
            <MyImage url={require(`../../img/${url}.png`)} id={id} />
            </div>
        )
    }  
}

export default LocalImage