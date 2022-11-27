/*
    <p>{dayjs(new Date()).format('YY-MM-DD')}</p> //22-05-16
    <p>{dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss')}</p> //2022/05/16 01:29:07
    <p>{dayjs(new Date()).format('hh:mm:ss A')}</p> //01:29:46 오전
    <p>{dayjs('20220516 013023').format('hh:mm:ss A')}</p> //01:30:23 오전
*/
import dayjs from "dayjs";

const DateFormat = () => {
    const spanStyle = {
        fontSize:"26px"
    }
    return (
        <span style={spanStyle}>
            {dayjs(new Date()).format('YYYY-MM-DD')}
        </span>
    );
}

export default DateFormat;
