import React from "react";
import Ingredient from './Ingredient.tsx'

const RecipeIngredients = ({recipeIngredientComponents}) => {
    console.log(recipeIngredientComponents);
    return (
        <div>
            {
                recipeIngredientComponents.map((component: any) => (
                    <div>
                        <b>{component.component_name}</b>
                        {
                            component.ingredients.map((ingredient) => (
                                <Ingredient ingredient={ingredient}/>
                            ))
                        }   
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeIngredients;