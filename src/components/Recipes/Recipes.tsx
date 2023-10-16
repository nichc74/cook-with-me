import React from "react";
import RecipeBox from './RecipeBox/RecipeBox.js';

interface RecipesProps {
    recipes: Array<Object>,
    togglePage: Number
}

const Recipes = ({recipes, togglePage}: RecipesProps) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
            {
                recipes.map((recipe: any) => (
                    <RecipeBox key={recipe.id} togglePage={togglePage} recipe={recipe}/>
                ))
            }
        </div>
    )
}

export default Recipes;