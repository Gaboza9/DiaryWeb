import DateFormat from './dateFormat'
import KjwLeft from './kjwLeft';
import KjwRight from './kjwRight';
import dayjs from "dayjs";
import { useState } from 'react';

function KjwDate(props){
    const style = {
        backgroundColor:"#ffffff00",
        display:"flex",
        flexDirection:"row",
        justifyContent: "center",
        marginBottom:"10px"
    }
    
    return(
        <div style={style}>
            <KjwLeft listener = {props.setLastDayListener}/>
            <span style={{fontSize:"21px"}}>{props.currentDate.format("YYYY-MM-DD")}</span>
            <KjwRight listener = {props.setNextDayListener}/>
        </div>
    );
}

export default KjwDate;