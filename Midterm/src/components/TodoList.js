import useTodoContext from "../hooks/use-todo-context";
import { SortMode } from "../context/Todos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, sortMode } = useTodoContext();
  const sortFunc = (a, b) => {
    if (sortMode === SortMode.OLDEST) {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  };
  const renderedTodos = todos
    .sort(sortFunc)
    .map((todo) => <TodoItem key={todo.id} todo={todo} />);
  return <div>{renderedTodos}</div>;
};

export default TodoList;
