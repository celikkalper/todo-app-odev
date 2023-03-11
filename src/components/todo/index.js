import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import TodoList from "./List/TodoList";

import "./styles.css";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    {
      done: true,
      text: "Taste JavaScript",
    },
    {
      text: "Code furiously",
      done: true,
    },
    {
      text: "Promote Mavo",
      done: false,
    },
    {
      text: "Give talks",
      done: false,
    },
    {
      text: "Write tutorials",
      done: true,
    },
    {
      text: "Have a life!",
      done: false,
    },
  ]);

  return (
    <section className="todoapp">
      <Header addTodo={setTodoList} todoList={todoList} />
      <TodoList addTodo={setTodoList} todoList={todoList} />
      <Footer />
    </section>
  );
};

export default Todo;
