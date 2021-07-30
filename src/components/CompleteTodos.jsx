import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p>完了のToDO</p>
      <ul>
        {todos.map((todos, index) => {
          return (
            <div className="list-row">
              <li>{todos}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
