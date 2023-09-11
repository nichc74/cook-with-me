import React from "react";
import RecipeBox from './RecipeBox/RecipeBox';

const Recipes = ({recipes, togglePage}) => {
    return (
        <div>
            {
                recipes.map((recipe: any) => (
                    <RecipeBox togglePage={togglePage} recipe={recipe} />
                ))
            }
        </div>
    )
}

export default Recipes;