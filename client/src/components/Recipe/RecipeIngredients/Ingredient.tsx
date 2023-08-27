import React from "react";

const Ingredient = ({ingredient}) => {
    return (
        <div className="RecipeDetailPage-ingr">
            {ingredient.amount}  {ingredient.metric}  {ingredient.name} 
          </div>
    )
}

export default Ingredient;