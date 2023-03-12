import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import TodoList from "./List/TodoList";

import "./styles.css";

const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Taste JavaScript",
      isDone: true,
    },
    {
      id: 2,
      text: "Code furiously",
      isDone: false,
    },
    { id: 3, text: "Promote Mavo", isDone: false },
    { id: 4, text: "Give talks", isDone: true },
  ]);

  return (
    <section className="todoapp">
      <Header setTodo={setTasks} todoList={tasks} />
      <TodoList setTodo={setTasks} todoList={tasks} />
      <Footer setTodo={setTasks} todoList={tasks} />
    </section>
  );
};

export default Todo;
