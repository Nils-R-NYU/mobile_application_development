import { useState } from "react";
import { ReactComponent as HeartIcon } from "@material-design-icons/svg/filled/favorite.svg";
import "./styles.css";

export default function UserRating() {
  const [count, setCount] = useState(1);

  function handleMinusClick() {
    setCount(Math.max(1, count - 1));
  }

  function handlePlusClick() {
    setCount(Math.min(5, count + 1));
  }

  return (
    <div className="user_rating">
      <button onClick={handleMinusClick} className={count > 1 ? "" : "hidden"}>
        -
      </button>
      <span className="hearts">
        {count}
        {[...Array(count)].map((c, i) => (
          <HeartIcon key={i}></HeartIcon>
        ))}
      </span>
      <button onClick={handlePlusClick} className={count < 5 ? "" : "hidden"}>
        +
      </button>
    </div>
  );
}
