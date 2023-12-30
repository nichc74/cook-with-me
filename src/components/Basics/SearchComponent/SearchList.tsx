import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './SearchDrawer.css';
const SearchList = ({recipeList, closeSearch} : any) => {
    return (
        <div className="RecipeList-search-container">
            {
                recipeList.map((recipe: any) => (
                    <div style={{padding: 16, cursor: "pointer"}} onClick={closeSearch}  key={recipe.id} >
                        <RecipeCard 
                            key={recipe.id} 
                            recipe={recipe}
                            
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default SearchList;