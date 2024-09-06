import Recipe from "./components/Recipe";

export default function App() {
  const recipe = {
    title: "Scambled Eggs",
    ingredients: ["Eggs"],
    instructions: ["Put pan on stove", "Turn stove on", "Put egg in pan"],
  };
  return <Recipe recipe={recipe} />;
}
