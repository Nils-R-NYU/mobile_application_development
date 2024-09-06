import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import imgScrambledEggs from "../assets/scrambledEggs.webp";

export default function Recipe(props) {
  const { recipe } = props;
  return (
    <>
      <img src={imgScrambledEggs} alt="Scrambled Eggs" width={300}/>
      <h1>Recipe for {recipe.title}</h1>
      <Ingredients ingredients={recipe.ingredients} />
      <Instructions instructions={recipe.instructions} />
    </>
  );
}
