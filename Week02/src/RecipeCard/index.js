import React from "react";
import { RECIPE } from "./recipe-data";
import RecipeInfo from "./RecipeInfo";
import RecipeImg from "./RecipeImg";
import IngredientsList from "./IngredientsList";
import InstructionsList from "./InstructionsList";
import Card from "./Card";
import "./styles.css";
import UserRating from "./UserRating";

export default function RecipeCard() {
  return (
    <Card>
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <div className="card_text">
        <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
        <div className="card_lists">
          <IngredientsList ingredients={RECIPE.ingredients} />
          <InstructionsList instructions={RECIPE.instructions} />
        </div>
        <UserRating />
      </div>
    </Card>
  );
}
