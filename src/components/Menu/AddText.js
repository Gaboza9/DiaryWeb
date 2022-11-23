import React from 'react'

function AddText(days) {
    const text = localStorage.getItem(days.day);

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
  const deleteConfirm= () => { localStorage.removeItem(days.day);
    window.location.reload();};
  const cancelConfirm = () => console.log("취소했습니다.");
  const confirmDelete = useConfirm(
    "삭제하시겠습니까?",
    deleteConfirm,
    cancelConfirm
  );

return (
    <div class="px-2 py-2" onContextMenu={confirmDelete} >
        {text}
    </div>
  )
}

export default AddText