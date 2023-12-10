import { createReducer } from '@reduxjs/toolkit';
import { updateRecipes } from "../actions/recipesActions";

const initialState = { 
   recipes: []
};


const recipeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateRecipes, (state, action) => {
            state.recipes = action.payload
        })
});
  
export default recipeReducer;