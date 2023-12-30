import React from 'react';
import SearchList from './SearchList';

const SearchContent = ({searchResults, closeSearch} : any) => {
    return (
        <>
            {
                searchResults.general_recipes.length > 0 &&
                <>
                    <h2 style={{color: "#ababab"}}>Recipes</h2>
                    <SearchList 
                        closeSearch={closeSearch}
                        recipeList={searchResults.general_recipes}/>
                </>
            }
            {
                searchResults.recipes_with_ingredient.length > 0 &&
                <>
                    <h2 style={{color: "#ababab"}}>Relevant Recipes</h2>
                    <SearchList 
                        closeSearch={closeSearch}
                        recipeList={searchResults.recipes_with_ingredient}/>
                </>
                 
            }
        </>
    )
}

export default SearchContent;