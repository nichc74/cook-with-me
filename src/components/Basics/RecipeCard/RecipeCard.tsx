import React from 'react';
import './RecipeCard.css'
import {useNavigate } from 'react-router-dom';

const RecipeCard = ({recipe}: any) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/recipes${recipe.url_slug}`)
    }
  
    return (
        // <div onClick={handleClick} className="RecipeCard-main">
            <div className="RecipeCard-image-container" onClick={handleClick}>
                <img
                    className="RecipeCard-image"
                    alt="Recipe Image"
                    src={recipe.image}
                />
                <div className="RecipeCard-text-gradient">
                    <div className="RecipeCard-name">
                        {recipe.title} 
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default RecipeCard;