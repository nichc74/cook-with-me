import React from "react";
import IconTag from "../../IconTag/IconTag.js";

const RecipeMetadata = ({metadata}) => {
    console.log(metadata.metadata);

    return (
        <div className="RecipeDetailPage-main">
            <div className="RecipeDetailPage-header">
                <div className="RecipeDetailPage-header-top">
                <img
                    className="RecipeDetailPage-image"
                    alt="something alt"
                    src={metadata.image}
                />
                <div className="RecipeDetailPage-recipeTitle">
                    {metadata.title}
                </div>
                </div>
                <div className="RecipeDetailPage-header-divider"></div>
                <div className="RecipeDetailPage-header-bottom">
                    <IconTag value={metadata.serves} label="Serving"/>
                    <IconTag value={metadata.prep_time} label="Prep Time"/>
                    <IconTag value={metadata.cook_time} label="Cook Time"/>
                    <IconTag value={metadata.cuisine} label="Cuisine"/>
                    <IconTag value={metadata.category} label="Category"/>
                </div>
            </div>
           
        </div>
    )
}

export default RecipeMetadata;



// <div className="RecipeDetailPage-main">
            
//             <div className="RecipeDetailPage-header">
//                 <div className="RecipeDetailPage-header-top">
//                 <img
//                     className="RecipeDetailPage-image"
//                     alt="something alt"
//                     src={metadata.image}
//                 />
//                 <div className="RecipeDetailPage-recipeTitle">
//                     {metadata.title}
//                 </div>
//                 </div>
//                 <div className="RecipeDetailPage-header-divider"></div>
//                 <div className="RecipeDetailPage-header-bottom">
//                     <IconTag value="300 mins" label="Serving"/>
//                     <IconTag value="300 mins" label="Prep Time"/>
//                     <IconTag value="300 mins" label="Cook Time"/>
//                     <IconTag value="300 mins" label="Rest Time"/>
//                     <IconTag value="300 mins" label="Calories"/>
//                 </div>
//             </div>
//             <div className="RecipeDetailPage-body">
//                 <div className="RecipeDetailPage-ingrs">
//                 <div className="RecipeDetailPage-ingr-label RecipeDetailPage-body-label">
//                     Ingredients
//                 </div>
//                 {listIngredients()}
//                 </div>
//                 <div className="RecipeDetailPage-instr">
//                 <div className="RecipeDetailPage-instr-label RecipeDetailPage-body-label">
//                     Instructions
//                 </div>
//                 {listInstructions()}
//                 </div>
//             </div>
//             <button className="RecipeDetailPage-btn" onClick={toggleBackButton}>
//                 Lets go back!
//             </button>
//         </div>