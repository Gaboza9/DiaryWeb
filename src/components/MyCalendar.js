import React, {useState} from 'react'
import moment from 'moment'
import './MyCalendar.css';
import AddImage from './Menu/AddImage';
import AddIcon from './Menu/AddIcon';
import AddText from './Menu/AddText'

function MyCalendar(props) {
    const [getMoment, setMoment]=useState(moment());

    const today = getMoment;    
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1?53:today.clone().endOf('month').week();

    const MonthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const WeekNames =['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    // 날짜 네모
    const calendarArr = () => {
        let result = [];
        let week = firstWeek;

        for(week; week<=lastWeek; week++){
            result = result.concat(
                <tr key={week}>
                    {
                        Array(7).fill(0).map((data,index)=>{
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

                            //오늘 날짜
                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                                return (
                                    <td key={days.format('YYYYMMDD')}>
                                        <AddIcon days={days}/>
                                        <AddText day ={days.format('YYYY-MM-DD')}/>
                                    </td>
                                );
                            }else{
                                return(
                                    <td key={days.format('YYYYMMDD')} >                                  
                                         <AddIcon days={days}/>
                                         <AddText day ={days.format('YYYY-MM-DD')}/>
                                    </td>
                                )
                            }
                        })
                    }
                </tr>
            );
        }
        return result;
    }

    const getMonthEng=()=>{
        const todayMonth = today.format('MM');

        for(let i=1; i<10; i++){
            if(todayMonth === `0${i}`)
                return MonthNames[i-1];
        }
        for(let i=10; i<13; i++){
            if(todayMonth === `${i}`)
                return MonthNames[i-1];
        }
        return 'MonthEnglish'
    }

    const calendarHead=()=>{
        return (
        WeekNames.map( (week) => (
            <th>{week}</th>
        )))
    }

  return (
    <div className='Calendar'>
        <div className="control">
            <h3 class="mx-5 my-4" style={{color:'#DB7093'}}>{getMonthEng()}</h3>
            <div style={{marginLeft: 'auto'}} class="mt-4 me-3">
                <button class="btn btn-outline-danger" onClick={()=>{setMoment(getMoment.clone().subtract(1,'month'))}}>이전달</button>
                <span class="mx-3 my-3 fs-6">{today.format('YYYY 년 MM 월')}</span>
                <button class="btn btn-outline-danger me-4" onClick={()=>{setMoment(getMoment.clone().add(1,'month'))}}>다음달</button>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                {calendarHead()}
                </tr>
            </thead>
            <tbody>
                {calendarArr()}
            </tbody>
        </table>
    </div>
  )
}

export default MyCalendar