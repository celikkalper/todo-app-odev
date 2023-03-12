import React, { useEffect } from "react";

const TodoList = ({ todoList, setTodo }) => {
  useEffect(() => {
    console.log(todoList);
  });
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todoList.map((item) => (
          <li className={item.isDone ? "completed" : ""} key={item.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => {
                  setTodo(
                    todoList.map((i) => (i.id === item.id ? { ...i, isDone: !item.isDone } : i)),
                  );
                }}
                defaultChecked={item.isDone ? "completed" : ""}
              />
              <label>{item.text}</label>
              <button
                className="destroy"
                onClick={() => {
                  setTodo(todoList.filter((deleteItem) => !deleteItem.isDone));
                }}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
