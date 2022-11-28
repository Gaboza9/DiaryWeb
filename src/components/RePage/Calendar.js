import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { ko } from "date-fns/esm/locale";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
    	selected={startDate}
	onChange={(date) => setStartDate(date)} 
  locale={ko}
  dateFormat="yyyy년 MM월 dd일"
  showPopperArrow={false}
  customInput={
    <Form.Control as="textarea" rows={1} style={{width:"250px", fontFamily:'barun'}}/>
  }
    />
  );
};

export default Calendar