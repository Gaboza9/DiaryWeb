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
//     const formData = new FormData();
//     formData.append('file', img);
//     // 서버의 upload API 호출
//     const res = await axios.post("/api/upload", formData);
//     console.log(res);

//     // routes/img.js
//     const upload2 = multer();

//     //write api
//     router.post('/write', upload2.none(), async(req, res, next) => {
//       try{
//           // DB 생성
//       }catch(e){
//           //오류 처리
//       }
// })
    
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
          <form>
            날짜 : <input type="date"></input>
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