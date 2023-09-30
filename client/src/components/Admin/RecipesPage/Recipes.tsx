import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard.tsx";
import { getAllRecipesInAdmin } from "../../../apis/AdminAPI/RecipeAPI.ts";

const Recipes = ({}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => { // Make fetchRecipes async
        try {
          const fetchedRecipes = await getAllRecipesInAdmin();
          setRecipes(fetchedRecipes);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
        {
            recipes.map((recipe: any) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))
        }
        </div>
    )
}
export default Recipes;