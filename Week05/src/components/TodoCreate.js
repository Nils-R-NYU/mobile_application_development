import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";

const TodoCreate = (props) => {
  const { onCreate } = props;
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === "") {
      return;
    }
    onCreate(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        onChange={handleChange}
        value={title}
        placeholder="New Todo"
      />
      <button className="button">
        <MdOutlineAdd />
      </button>
    </form>
  );
};

export default TodoCreate;
