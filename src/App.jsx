import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncomplseteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncomplseteTodos(newTodos);
    alert();
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="imcomplete-area">
        <p>未完了のToDO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p>完了のToDO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
