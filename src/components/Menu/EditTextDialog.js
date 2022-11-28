
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from "react-redux";
import text from '../../redux/text';


function EditTextDialog(props) {
  const dispatch = useDispatch();
  
   //input에서 value를 담기 위한 state 생성
   const [textInfo, setTextInfo] = React.useState({
    text: "",
    date: "",
  });

    //input에 입력될 때마다 account state값 변경되게 하는 함수
    const onChangeTextInfo = (e) => {
      setTextInfo({
        ...textInfo,
        [e.target.name]: e.target.value,
      });
    };

    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      localStorage.setItem(props.day,textInfo.text);
      window.location.reload();
    };
     
    const handleClose2 = () => {
      setOpen(false);
      window.location.reload();
    };

  return (
    <div>
      <Dialog open={open} onClose={handleClose2}>
        <DialogTitle>텍스트 편집하기</DialogTitle>
        <DialogContent>
            날짜 : {props.day}
          <br></br> <br></br>
          <input type="text" name="text" placeholder="텍스트를 입력해주세요." onChange={onChangeTextInfo}></input>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>취소</Button>
          <Button onClick={handleClose}>편집하기</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditTextDialog