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
                <div className="RecipeDetailPage-header-divider"/>

                <div className="RecipeDetailPage-header-bottom">
                    <IconTag value={metadata.serves} label="Serving"/>
                    <IconTag value={metadata.prep_time} label="Prep Time"/>
                    <IconTag value={metadata.cook_time} label="Cook Time"/>
                    <IconTag value={metadata.cuisine} label="Cuisine"/>
                    <IconTag value={metadata.category} label="Category"/>
                </div>
                <a href={metadata.source_link}>Source</a>
            </div>
           
        </div>
    )
}

export default RecipeMetadata;