import React from 'react'

function Monthly() {
    return (
        <>
        <Title/>
        <div style={{display:'flex', flexDirection:'row', height:'100%'}}>
        <Sidebar/>
           <MyCalendar/>
        </div>
        </>
      );
}

export default Monthly