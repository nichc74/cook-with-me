import React from "react";
import Ingredient from './Ingredient.tsx'

const RecipeIngredients = ({recipeIngredientComponents}) => {
    return (
        <div style={{borderRight: "1px solid lightgray"}}>
            <div className="RecipeDetailPage-ingr-label RecipeDetailPage-body-label">
                Ingredients
            </div>
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