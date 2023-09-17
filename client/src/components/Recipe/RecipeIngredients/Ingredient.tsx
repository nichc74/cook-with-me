import React from "react";

const Ingredient = ({ingredient}) => {
    console.log(ingredient);
    let conversions = new Map();
    conversions.set(0.25, "1/4");
    conversions.set(0.5, "1/2");
    conversions.set(0.75, "3/4");
    
    return (
        <div className="RecipeDetailPage-ingr">
            {
                conversions.has(ingredient.amount) ? 
                    conversions.get(ingredient.amount)
                    :
                    ingredient.amount
            }
                &nbsp; <span>
                    {ingredient.metric !== '0' && <span> {ingredient.metric} </span> }
                </span>  
            {ingredient.name} 
          </div>
    )
}

export default Ingredient;