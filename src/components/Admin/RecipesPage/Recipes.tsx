import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard.tsx";
// import { getAllRecipesInAdmin } from "../../../apis/AdminAPI/RecipeAPI.js";

interface RecipesPageProps {
    recipes: Array<Object>
}

const Recipes = ({recipes}: RecipesPageProps) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
          {
              recipes.map((recipe: any) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
              ))
          }
        </div>
    )
}
export default Recipes;