import { useState } from "react";
import useTodoContext from "../hooks/use-todo-context";
import TodoEdit from "./TodoEdit";
import { TiDeleteOutline } from "react-icons/ti";
import { MdEdit } from "react-icons/md";

const TodoItem = (props) => {
  const { todo } = props;
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTodoById } = useTodoContext();

  const handleDelete = () => {
    deleteTodoById(todo.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = (
    <div className="item-content">
      <h3>{todo.title}</h3>
      <h3 className="date">{todo.date}</h3>
    </div>
  );
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <div className="item">
      <span className="item-content-wrapper">{content}</span>
      <span className="item-actions">
        {!showEdit && (
          <button onClick={handleEdit}>
            <MdEdit />
          </button>
        )}
        <button onClick={handleDelete}>
          <TiDeleteOutline />
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
