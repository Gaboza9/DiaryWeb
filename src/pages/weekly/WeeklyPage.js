import { useMemo, useState } from "react";
import WeeklyCalanderItem from "../../components/WeeklyCalanderItem";
import "./weekly.css";

const getWeeklyCalander = () => {
  const dateObj = new Date();
  const dayIdx = dateObj.getDay() - 1;

  for (let i = 0; i < dayIdx; i++) {
    dateObj.setDate(dateObj.getDate() - 1);
  }

  const calanderDates = [];
  for (let i = 0; i < 7; i++) {
    calanderDates.push(new Date(dateObj.getTime()));
    dateObj.setDate(dateObj.getDate() + 1);
  }

  calanderDates.unshift(new Date(0));

  return calanderDates;
};
const getId = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();

  return `${year}-${month}-${date}`;
};

function leftPad(value) {
  if (value >= 10) {
      return value;
  }

  return `0${value}`;
}

const getDate =(dateObj) =>{
  const year = dateObj.getFullYear();
  const month = leftPad(dateObj.getMonth()+1);
  const day = leftPad(dateObj.getDate());

  return [year, month, day].join(".");
};

const getData = () => {
  try {
    const data = window.localStorage.getItem("weekly_data");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
};
const saveData = (data) => {
  localStorage.setItem("weekly_data", JSON.stringify(data));
};

const WeeklyPage = () => {
  const weekData = useMemo(() => getWeeklyCalander(), []);
  const [data, setData] = useState(getData());

  const createTodo = (id, value) => {
    const existData = data.find((item) => item.id === id) !== undefined;

    if (existData) {
      const newData = data.map((item) => {
        if (item.id === id) {
          return {
            id,
            todos: item.todos.concat({ checked: false, text: value }),
          };
        }
        return item;
      });
      setData(newData);
      saveData(newData);
      return;
    }

    const newData = data.concat({
      id,
      todos: [{ checked: false, text: value }],
    });

    setData(newData);
    saveData(newData);
  };
  const changeCheck = (id, todoText, bool) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          id,
          todos: item.todos.map((e) => {
            if (e.text === todoText) {
              return {
                text: e.text,
                checked: bool,
              };
            }
            return e;
          }),
        };
      }

      return item;
    });

    setData(newData);
    saveData(newData);
  };
  const deleteTodo = (id, todoText) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          id,
          todos: item.todos.filter((todo) => todo.text !== todoText),
        };
      }

      return item;
    });

    setData(newData);
    saveData(newData);
  };
  return (
    <div className="weekly-container mx-5 my-5 pb-5">
      {weekData.map((item, idx) => {
        const id = getId(item);
        const dateFormat = getDate(item);
        const calanderData = data.find((e) => e.id === id);
        const props = {
          id: id,
          key: id,
          dateFormat: dateFormat,
          onCreateTodo: createTodo,
          data: calanderData?.todos ?? [],
          date: item,
          onDeleteTodo: deleteTodo,
          onChangeChecked: changeCheck,
        };

        if (idx === 0) {
          return <WeeklyCalanderItem customHeader="MEMO" {...props} />;
        }
        return <WeeklyCalanderItem {...props} />;
      })}
    </div>
  );
};

export default WeeklyPage;
