import React from "react";

const Ingredient = ({ingredient}) => {
    return (
        <div className="RecipeDetailPage-ingr">
            {ingredient.amount}  
                &nbsp; <span>
                    {ingredient.metric !== '0' && <span> {ingredient.metric} </span> }
                </span>  
            {ingredient.name} 
          </div>
    )
}

export default Ingredient;