import './RecipeBox.css'
// import Recipe from '../Recipe/Recipe';

export default function RecipeBox({togglePage, recipe}) {
  function handleClick() {
    console.log(recipe.id);
    togglePage(recipe.id);
  }
  
  return (
    <div onClick={handleClick} className="RecipeBox-main">
      <img
        className="RecipeBox-image"
        width={275}
        height={275}
        alt="something alt"
        src={recipe.image}
      />
      <div className="RecipeBox-name">
        {recipe.title} 
      </div>
    </div>
  )
}