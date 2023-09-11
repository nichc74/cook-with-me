import { createReducer } from '@reduxjs/toolkit';
import { updateMetadata, updateSummary, updateRecipeIngredientComponent, updateRecipeInstructionalComponent, updateNotes } from "../actions/recipeActions";

const initialState = { 
    metadata: {},
    summary: "",
    recipe_ingredient_components: [],
    recipe_instructional_components: [],
    notes: [],
};


const recipeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateMetadata, (state, action) => {
            state.metadata = action.payload
        })
        .addCase(updateSummary, (state, action) => {
            state.summary = action.payload
        })
        .addCase(updateRecipeIngredientComponent, (state, action) => {
            state.recipe_ingredient_components = action.payload
        })
        .addCase(updateRecipeInstructionalComponent, (state, action) => {
           state.recipe_instructional_components = action.payload
        })
        .addCase(updateNotes, (state, action) => {
            state.notes = action.payload
        })
});
  
export default recipeReducer;