import { TiDeleteOutline } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import TodoEdit from "./TodoEdit";
const TodoItem = (props) => {
  const { todo, onDelete, onEdit } = props;
  const [showEdit, setShowEdit] = useState(false);

  // NEW we need two different click handlers so we will change this to handleDelete
  const handleDelete = () => {
    onDelete(todo.id);
  };

  // NEW edit handler, THIS JUST HIDES AND SHOWS
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  // LAST: combine edit and close forms into one submit prop/handler
  // remove ONEDIT
  const handleSubmit = (id, newTitle) => {
    // CHANGE TO ONEDIT PROP NOT HANDLEEDIT ANYMIRE
    onEdit(id, newTitle);
    setShowEdit(false);
  };
  // NEW Conditional content
  let content = <h3>{todo.title}</h3>;
  /* FIRST PASS WITH ONEDIT
  if (showEdit) {
    // would be nice to have the existing todo pre-populate the form right?
    // lets make TodoEdit component do that!
    content = <TodoEdit todo={todo} onEdit={onEdit} />
  }
    */
  // LAST
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <div className="item">
      <span className="item-content">{content}</span>
      <span className="item-actions">
        <button onClick={handleEdit}>
          <MdEdit />
        </button>
        <button onClick={handleDelete}>
          <TiDeleteOutline />
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
