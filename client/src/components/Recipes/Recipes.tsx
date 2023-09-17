import React from "react";
import RecipeBox from './RecipeBox/RecipeBox';
import { useNavigate, Route } from "react-router-dom";

const Recipes = ({recipes, togglePage}) => {
    const navigate = useNavigate();

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
            {
                recipes.map((recipe: any) => (
                    <RecipeBox togglePage={togglePage} recipe={recipe}/>
                    // <Route path={recipe.url_slug} element={<RecipeBox togglePage={togglePage} recipe={recipe}/>}/>
                ))
            }
        </div>
    )
}

export default Recipes;