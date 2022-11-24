import React from 'react'
import Picture from './Picture';

function LocalImage(key) {
    const url = localStorage.getItem(key.days+"Url");
    const id = localStorage.getItem(key.days+"Id");
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
      const deleteConfirm= () => { localStorage.removeItem(key.days+"Url");
      localStorage.removeItem(key.days+"Id");
      localStorage.removeItem(key.days+"Icon");
        window.location.reload();};
      const cancelConfirm = () => console.log("취소했습니다.");
      const confirmDelete = useConfirm(
        "삭제하시겠습니까?",
        deleteConfirm,
        cancelConfirm
      );

    console.log(icon);
    if(url){
        return (
            <div class="text-center" onContextMenu={confirmDelete}>
            <Picture url={require(`../../img/${url}.png`)} id={id} />
            </div>
        )
    }  
}

export default LocalImage