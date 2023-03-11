import React, { useEffect, useState } from "react";

const TodoList = ({ addTodo, todoList }) => {
  useEffect(() => {}, [todoList]);
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todoList.map((item, index) => (
          <li className={item.done === true ? "completed" : ""} key={index}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{item.text}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
