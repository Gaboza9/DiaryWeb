import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ImageUpload from './ImageUpload'

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = async () => {
    // 선택된 날짜 배경
    setOpen(false);
  
  };



  return (
    <div>
      {/* <button type="button" class="btn btn-outline-secondary px-5 py-2 mx-4 my-4" 
      style={{ height:'50%', width:'85%'}} onClick={handleClickOpen}>이미지 업로드 하기</button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>이미지 올리기</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
          </DialogContentText> */}
          <ImageUpload/>
          <br></br>
          <form>
            날짜 : <input type="date" style={{display:'inline-block'}}></input>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleUpload}>올리기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}