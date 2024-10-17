import { useEffect } from "react";
import useTodoContext from "./hooks/use-todo-context";
import { PiCatFill } from "react-icons/pi";

import TodoCreate from "./components/TodoCreate";
import ListSort from "./components/ListSort";
import TodoList from "./components/TodoList";

const App = () => {
  // believe it or not,fetchTodos is the the only item we need from context in App
  const { fetchTodos } = useTodoContext();
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="app">
      <h1>
        <p>Purr-iority List</p>
        <PiCatFill className="icon" />
      </h1>
      <TodoCreate />
      <ListSort />
      <TodoList />
    </div>
  );
};

export default App;
