import React, { useEffect, useState } from "react";

const initialValue = { text: "", done: false };

const Header = ({ addTodo, todoList }) => {
  const [newTodo, setNewTodo] = useState(initialValue);
  const onChange = (e) => {
    e.preventDefault();
    setNewTodo({ ...newTodo, text: e.target.value });
  };

  const onSubmited = (e) => {
    e.preventDefault();

    addTodo([...todoList, newTodo]);
    setNewTodo(initialValue);
    // console.log(e.code);
  };

  // useEffect(() => {}, []);
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
