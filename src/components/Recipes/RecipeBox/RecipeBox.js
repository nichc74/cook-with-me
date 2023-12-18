import React from 'react';
import './RecipeBox.css'
import {useNavigate } from 'react-router-dom';
// import Recipe from '../Recipe/Recipe';
// interface RecipeProps {
//     recipe: object,
//     togglePage: Number
// }

const RecipeBox = ({togglePage, recipe}) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/recipes${recipe.url_slug}`)
    }
  
    return (
        <div onClick={handleClick} className="RecipeBox-main">
            <div className="RecipeBox-image-container">
                <img
                    className="RecipeBox-image"
                    alt="Recipe Image"
                    src={recipe.image}
                />
                <div className="RecipeBox-text-gradient">
                    <div className="RecipeBox-name">
                        {recipe.title} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeBox;