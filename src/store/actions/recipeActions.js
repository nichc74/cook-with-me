import {createAction} from '@reduxjs/toolkit';

export const updateMetadata = createAction('recipeForm/updateMetadata');
export const updateSummary = createAction('recipeForm/updateSummary');
export const updateRecipeIngredientComponent = createAction('recipeForm/updateRecipeIngredientComponent');
export const updateRecipeInstructionalComponent = createAction('recipeForm/updateRecipeInstructionalComponent');
export const updateRecipeNotes = createAction('recipeForm/updateNotes');
