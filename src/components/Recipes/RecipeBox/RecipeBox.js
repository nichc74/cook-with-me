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
        togglePage(recipe.id);
    }
  
    return (
        <div onClick={handleClick} className="RecipeBox-main">
            <div style={{width: `${240}px`, height: `${240}px`, margin: "auto" }}>
                <img
                    className="RecipeBox-image"
                    alt="Recipe Image"
                    src={recipe.image}
                />
            </div>
            
            <div className="RecipeBox-name">
                {recipe.title} 
            </div>
        </div>
    )
}

export default RecipeBox;