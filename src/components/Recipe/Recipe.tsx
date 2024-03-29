import React, { useEffect, useState } from "react";
import { getRecipeBySlug } from "../../apis/AdminAPI/RecipeAPI.js";
import RecipeMetadata from "./RecipeMetadata/RecipeMetadata.tsx";
import RecipeSummary from "./RecipeSummary/RecipeSummary.tsx";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients.tsx";
import RecipeInstructions from "./RecipeInstructions/RecipeInstrunctions.tsx";
import RecipeNotes from "./RecipeNotes/RecipeNotes.tsx";
import { useParams } from "react-router-dom";
import { convertUTCtoLocalDate } from "../../helpers/timezoneConverter";
import './Recipe.css';

interface RecipeProps {
  slug: string 
  recipe_id: number
}

const Recipe = ({ slug, recipe_id }: RecipeProps) => {

  const params = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    fetchRecipeDetails();
  }, [slug]);

  const fetchRecipeDetails = async () => {
    let recipeDetail;
    	try {
			if (Object.keys(params).length !== 0) {
				recipeDetail = await getRecipeBySlug(`/${params.slug}`);
			}
			else {
				recipeDetail = await getRecipeBySlug(`/${slug}`);
			}
      		setRecipeDetails(recipeDetail);

		} catch (error) {
			console.error("Error fetching recipe details:", error);
		}
  	};

	return (
		<div className="recipe-detail-page">
			{recipeDetails ? (
				<div>
					<RecipeMetadata metadata={recipeDetails.metadata} />
					<RecipeSummary summary={recipeDetails.recipe_summary.summary}/>
					<div className="RecipeDetailPage-body">
						<div className="RecipeDetailPage-ingredient-body">
						<RecipeIngredients recipeIngredientComponents={recipeDetails.recipe_ingredient_components} />
						</div>
						<div className="RecipeDetailPage-instruction-body">
						<RecipeInstructions recipeComponentInstructions={recipeDetails.recipe_instructional_components} />
						</div>
					</div> 
					<RecipeNotes notes={recipeDetails.notes} />
					{recipeDetails.metadata.updated_at && 
						<div className="last-updated-time">
							Last Updated: {convertUTCtoLocalDate(recipeDetails.metadata.updated_at)}
						</div>
					}
					
				</div>
			) : (
				<p>Loading Recipe Data...</p>
			)}
		</div>
	);
};

export default Recipe;