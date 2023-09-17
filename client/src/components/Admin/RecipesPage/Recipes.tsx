import React from "react";
import RecipeCard from "./RecipeCard.tsx";

const Recipes = ({recipes}) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
        {
            recipes.map((recipe: any) => (
                <RecipeCard recipe={recipe} />
            ))
        }
        </div>
    )
}
export default Recipes;