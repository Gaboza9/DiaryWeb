import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddText from './AddText';
import MyCalendar from '../MyCalendar';

function TextDialog() {
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
      localStorage.setItem('key', textInfo);
      localStorage.getItem('key');
    };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>텍스트 추가하기</DialogTitle>
        <DialogContent>
        <form>
            날짜 : <input name="date" type="date" onChange={onChangeTextInfo}></input>
          </form>
          <br></br>
          <input type="text" name="text" placeholder="텍스트를 입력해주세요." onChange={onChangeTextInfo}></input>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose}>올리기</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TextDialog