import { color } from "@mui/system";
import { useRef, useState } from "react";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const headerMap = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const WeeklyCalanderItem = ({
  customHeader,
  date,
  onCreateTodo,
  id,
  data,
  onChangeChecked,
  onDeleteTodo,
}) => {
  const dayIdx = date.getDay();
  const [visiblePopup, setVisiblePopup] = useState(false);

  const togglePopup = () => {
    setVisiblePopup((prev) => !prev);
  };
  const createTodo = (todo) => {
    onCreateTodo(id, todo);
    togglePopup();
  };
  const onChangeCheck = (todoText, bool) => {
    onChangeChecked(id, todoText, bool);
  };
  const onChangeLine = (todoText, bool) => {
    if(bool){
      return(
        <div style={{textDecoration: 'line-through', color:'grey'}}>{todoText}</div>
      )
    }else{
      return(
        <div>{todoText}</div>
      )
    }
  };
  const deleteTodo = (todoText) => {
    onDeleteTodo(id, todoText);
  };
  return (
    <div className="weekly-calander-item">
      {visiblePopup && (
        <CreatePopup onCreateTodo={createTodo} onClose={togglePopup} />
      )}
      <div className="weekly-calander-header text-center">
        {customHeader ?? headerMap[dayIdx]}
      </div>
      <div className="weekly-calander-body">
        {data.map((item) => (
          <div>
            <FormCheckInput
              checked={item.checked}
              onClick={() => {
                onChangeCheck(item.text, !item.checked);
              }}
            />
           {onChangeLine(item.text, item.checked)}
            <button
              onClick={() => {
                deleteTodo(item.text);
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
      <button onClick={togglePopup} className="weekly-calander-popup-button">
        <PlusSvg />
      </button>
    </div>
  );
};

const CreatePopup = ({ onClose, onCreateTodo }) => {
  const ref = useRef();
  const [todo, setTodo] = useState("");

  const overrideClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const crateTodo = () => {
    onCreateTodo(todo);
  };
  const inputHandle = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div ref={ref} onClick={overrideClose} className="weekly-create-popup">
      <div className="weekly-create-popup-content">
        <div>할 일을 입력하세요</div>
        <input onChange={inputHandle} value={todo} />
        <div>
          <button onClick={onClose}>취소</button>
          <button onClick={crateTodo}>확인</button>
        </div>
      </div>
    </div>
  );
};

const PlusSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg-icon"
      viewBox="0 0 1024 1024"
      fill="white"
      version="1.1"
    >
      <path d="M911.232 420.565333l0 109.717333q0 22.848-16 38.848t-38.848 16l-237.717333 0 0 237.717333q0 22.848-16 38.848t-38.848 16l-109.717333 0q-22.848 0-38.848-16t-16-38.848l0-237.717333-237.717333 0q-22.848 0-38.848-16t-16-38.848l0-109.717333q0-22.848 16-38.848t38.848-16l237.717333 0 0-237.717333q0-22.848 16-38.848t38.848-16l109.717333 0q22.848 0 38.848 16t16 38.848l0 237.717333 237.717333 0q22.848 0 38.848 16t16 38.848z" />
    </svg>
  );
};
export default WeeklyCalanderItem;
