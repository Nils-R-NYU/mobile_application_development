import { useState } from "react";
import useTodoContext from "../hooks/use-todo-context";
import { MdOutlineAdd } from "react-icons/md";

const TodoCreate = () => {
  const { createTodo } = useTodoContext();

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(title, date);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <input
          type="text"
          onChange={handleChange}
          value={title}
          placeholder="New Todo"
          className="border-left-only"
        />
        <button className="button">
          <MdOutlineAdd />
        </button>
      </div>
      <div className="row">
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
    </form>
  );
};

export default TodoCreate;
