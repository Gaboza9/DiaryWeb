import React,{useState} from 'react'
import EditTextDialog from './EditTextDialog';
import '../../fonts/font.css'

function AddText(days) {
    const [content,setContent] = useState('');
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
    "텍스트를 삭제하시겠습니까?",
    deleteConfirm,
    cancelConfirm
  );

  const eidtText=()=>{
        if(content === '편집')
            return (<EditTextDialog day={days.day}/>)
    
  }
return (
    <div style={{fontFamily:'diarly'}} class="fs-6 px-2 py-2" onContextMenu={confirmDelete} onDoubleClick={()=> setContent('편집')}>
        {text}
        {content && eidtText()}
    </div>
  )
}

export default AddText