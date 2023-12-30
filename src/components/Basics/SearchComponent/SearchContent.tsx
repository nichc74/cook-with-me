import React from 'react';
import SearchList from './SearchList';

const SearchContent = ({ searchResults, closeSearch }: any) => {
    const { general_recipes, recipes_with_ingredient } = searchResults;
    const hasGeneralRecipes = general_recipes.length > 0;
    const hasRelevantRecipes = recipes_with_ingredient.length > 0;

    return (
        <>
            {!hasGeneralRecipes && !hasRelevantRecipes && (
                <h2 style={{ color: "#ababab" }}>No results :(</h2>
            )}

            {hasGeneralRecipes && (
                <>
                    <h2 style={{ color: "#ababab" }}>Recipes</h2>
                    <SearchList closeSearch={closeSearch} recipeList={general_recipes} />
                </>
            )}

            {hasRelevantRecipes && (
                <>
                    <h2 style={{ color: "#ababab" }}>Relevant Recipes</h2>
                    <SearchList closeSearch={closeSearch} recipeList={recipes_with_ingredient} />
                </>
            )}
        </>
    );
}

export default SearchContent;
