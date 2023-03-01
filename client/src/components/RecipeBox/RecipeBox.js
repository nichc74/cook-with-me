import './RecipeBox.css'

export default function RecipeBox({togglePage, id, recipe}) {
  function handleClick() {
    togglePage(1)
  }
  
  return (
    <div onClick={handleClick} className="RecipeBox-main">
      <img
        className="RecipeBox-image"
        width={275}
        height={275}
        alt="something alt"
        src={recipe.img}
      />
      <div className="RecipeBox-name">
        {recipe.name} 
      </div>
    </div>
  )
}