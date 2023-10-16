import { createReducer } from '@reduxjs/toolkit';
import { updateMetadata, updateSummary, updateRecipeIngredientComponent, updateRecipeInstructionalComponent, updateRecipeNotes } from "../actions/recipeActions";

const initialState = { 
    metadata: {},
    summary: {},
    recipeIngredientComponents: [],
    recipeInstructionalComponents: [],
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
            state.recipeIngredientComponents = action.payload
        })
        .addCase(updateRecipeInstructionalComponent, (state, action) => {
           state.recipeInstructionalComponents = action.payload
        })
        .addCase(updateRecipeNotes, (state, action) => {
            state.notes = action.payload
        })
});
  
export default recipeReducer;