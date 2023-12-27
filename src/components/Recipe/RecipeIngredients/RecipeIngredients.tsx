import React from "react";
import Ingredient from './Ingredient.tsx'

const RecipeIngredients = ({recipeIngredientComponents}) => {
    console.dir(recipeIngredientComponents)
    return (
        <div className="Recipe-detail-top-border">
            <div className="RecipeDetailPage-ingr-label RecipeDetailPage-body-label">
                Ingredients
            </div>
            {
                recipeIngredientComponents.map((component: any) => (
                    <div key={component.id}>
                        <b>{component.component_name}</b>
                        {
                            component.ingredients.map((ingredient) => (
                                <Ingredient key={ingredient.id} ingredient={ingredient}/>
                            ))
                        }   
                        <br/>
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeIngredients;