import React, { useEffect, useState } from "react";
import { getRecipe } from "../../apis/AdminAPI/RecipeAPI";
import RecipeMetadata from "./RecipeMetadata/RecipeMetadata.tsx";
import RecipeSummary from "./RecipeSummary/RecipeSummary.tsx";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients.tsx";
import RecipeInstructions from "./RecipeInstructions/RecipeInstrunctions.tsx";
import RecipeNotes from "./RecipeNotes/RecipeNotes.tsx";

const Recipe = ({ recipe_id }) => {
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    fetchRecipeDetails();
  }, [recipe_id]);

  const fetchRecipeDetails = async () => {
    try {
      const recipeDetail = await getRecipe(recipe_id);
      setRecipeDetails(recipeDetail);
      console.log(recipeDetail);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  return (
    <div>
        {recipeDetails ? (
            <div>
                <RecipeMetadata metadata={recipeDetails.metadata} />
                <RecipeSummary summary={recipeDetails.recipe_summary[0].summary}/>
                <div className="RecipeDetailPage-body">
                    <div className="RecipeDetailPage-ingredient-body">
                      <RecipeIngredients recipeIngredientComponents={recipeDetails.recipe_ingredient_components} />
                    </div>
                    <div className="RecipeDetailPage-instruction-body">
                      <RecipeInstructions recipeComponentInstructions={recipeDetails.recipe_instructional_components} />
                    </div>
                </div>
                <RecipeNotes notes={recipeDetails.notes} />
            </div>
        ) : (
            <p>Loading Recipe Data...</p>
        )}
    </div>
  );
};

export default Recipe;