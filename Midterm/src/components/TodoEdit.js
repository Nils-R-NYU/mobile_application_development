import { useState } from "react";
import useTodoContext from "../hooks/use-todo-context";
import { FaCheck } from "react-icons/fa";

const TodoEdit = (props) => {
  const { todo, onSubmit } = props;
  const [title, setTitle] = useState(todo.title);
  const [date, setDate] = useState(todo.date);
  const { editTodoById } = useTodoContext();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodoById(todo.id, title, date);
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit} className="smaller">
      <div className="item-content">
        <input
          type="text"
          onChange={handleTitleChange}
          value={title}
          placeholder="Edit Todo"
        />
        <input type="date" value={date} onChange={handleDateChange} />
      </div>
      <button>
        <FaCheck />
      </button>
    </form>
  );
};

export default TodoEdit;
