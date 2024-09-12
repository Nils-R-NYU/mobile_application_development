import { useState } from "react";
import Button from "../components/Button";
import { ReactComponent as HeartIcon } from "@material-design-icons/svg/filled/favorite.svg";

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
      <Button primary hidden={count <= 1} onClick={handleMinusClick}>
        -
      </Button>
      <span className="hearts">
        {count}
        {[...Array(count)].map((c, i) => (
          <HeartIcon key={i}></HeartIcon>
        ))}
      </span>
      <Button primary hidden={count >= 5} onClick={handlePlusClick}>
        +
      </Button>
    </div>
  );
}
