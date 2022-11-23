import React from 'react'
import Sidebar from '../components/Sidebar';
import MyCalendar from '../components/MyCalendar';

function Monthly() {
    return (
        <>
        <div style={{display:'flex', flexDirection:'row', height:'100%'}}>
        <Sidebar/>
           <MyCalendar/>
        </div>
        </>
      );
}

export default Monthly