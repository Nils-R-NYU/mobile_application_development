import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const TodoEdit = (props) => {
  const { todo, onSubmit } = props;
  const [title, setTitle] = useState(todo.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(todo.id, title);
  };
  return (
    <form onSubmit={handleSubmit} className="smaller">
      <input
        type="text"
        onChange={handleChange}
        value={title}
        placeholder="Edit Todo"
      />
      <button>
        <FaCheck />
      </button>
    </form>
  );
};

export default TodoEdit;
