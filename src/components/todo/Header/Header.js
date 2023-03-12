import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const initialValue = { id: "", text: "", done: false };

const Header = ({ setTodo, todoList }) => {
  const [newTodo, setNewTodo] = useState(initialValue);
  const onChange = (e) => {
    e.preventDefault();
    setNewTodo({ ...newTodo, id: uuidv4(), text: e.target.value });
  };

  const onSubmited = (e) => {
    e.preventDefault();

    setTodo([...todoList, newTodo]);
    setNewTodo(initialValue);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmited}>
        <input
          className="new-todo"
          name="text"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodo.text}
          onChange={onChange}
        />
      </form>
    </header>
  );
};

export default Header;
