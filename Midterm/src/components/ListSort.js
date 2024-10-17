import useTodoContext from "../hooks/use-todo-context";
import { SortMode } from "../context/Todos";

const ListSort = () => {
  const { sortMode, toggleSortMode } = useTodoContext();

  const onSortButtonClick = () => {
    toggleSortMode();
  };

  const button =
    sortMode === SortMode.NEWEST ? (
      <p className="sort-button" onClick={onSortButtonClick}>
        Furthest first
      </p>
    ) : (
      <p className="sort-button" onClick={onSortButtonClick}>
        Closest first
      </p>
    );

  return (
    <div className="list-sort">
      <p>Sort by:</p>
      {button}
    </div>
  );
};

export default ListSort;
