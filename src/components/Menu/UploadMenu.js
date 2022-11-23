import * as React from 'react';
import UploadImgDialog from './UploadImgDialog'

function UploadMenu() {
  return (
    <>
    <div style={{display:'flex', flexDirection:'column'}}>
        <UploadImgDialog/>
        {/* <ImageMenu/> */}
    </div>
    </>
  )
}

export default UploadMenu