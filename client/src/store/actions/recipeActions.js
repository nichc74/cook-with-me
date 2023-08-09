import {createAction} from '@reduxjs/toolkit';

export const updateMetadata = createAction('recipeForm/updateMetadata');
export const updateSummary = createAction('recipeForm/updateSummary');
export const updateRecipeIngredientComponent = createAction('recipeForm/updateRecipeIngredientComponent');
export const updateRecipeInstructionalComponent = createAction('recipeForm/updateRecipeInstructionalComponent');
export const updateNotes = createAction('recipeForm/updateNotes');
