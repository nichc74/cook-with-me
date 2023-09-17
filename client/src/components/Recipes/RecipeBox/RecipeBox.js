import './RecipeBox.css'
import {useNavigate } from 'react-router-dom';
// import Recipe from '../Recipe/Recipe';

export default function RecipeBox({togglePage, recipe}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(recipe.url_slug)
    console.log(recipe.id);
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