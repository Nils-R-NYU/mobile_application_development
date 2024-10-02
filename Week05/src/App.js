import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import { PiCatFill } from "react-icons/pi";
const App = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (title) => {
    const updatedTodos = [
      ...todos,
      { id: Math.round(Math.random() * 9999999), title },
    ];
    setTodos(updatedTodos);
  };

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  };

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="app">
      <h1>
        <p>Purr-iority List</p>
        <PiCatFill className="icon" />
      </h1>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  );
};

export default App;
