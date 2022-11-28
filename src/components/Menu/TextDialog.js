import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from "react-redux";
import ChoiceFont from './ChoiceFont';
import InputColor from 'react-input-color';


function TextDialog() {
  const [color,setColor] = React.useState('');
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
      localStorage.setItem(textInfo.date,textInfo.text);
      window.location.reload();
    };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>텍스트 추가하기</DialogTitle>
        <DialogContent>
        <form>
            날짜 : <input name="date" type="date" class="mx-2" onChange={onChangeTextInfo} style={{display:'inline-block'}}></input>
          </form>
          <br></br>
          <input type="text" name="text" placeholder="텍스트를 입력해주세요." size="35" onChange={onChangeTextInfo}></input>
        </DialogContent>
        {/* <div class="mx-4"> */}
        {/* <div class="my-2"> 🖤 텍스트 스타일 선택하기 🖤 </div>
        <ChoiceFont/>
        <span>색상 : </span>
        <InputColor
        initialValue="#5e72e4"
        onChange={setColor(this.value)}
        placement="right"
        />
        {console.log(this.value)}
        </div> */}
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose}>올리기</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TextDialog