import React, { useState } from 'react';
import './RecipeForm.css';
import RecipeMetadataForm from './RecipeMetadataForm.tsx';
import IngredientForm from './IngredientForm/IngredientForm.tsx';
import InstructionForm from './InstructionForm/InstructionForm.tsx';
import NoteForm from './NoteForm/NoteForm.tsx';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

interface Metadata {
    title: string,
    author: string,
    prepTime: number,
    cookTime: number,
    cuisineType: string,
    category: string,
    servings: number,
    summary: string
}

const RecipeForm: React.FC = () => {
    const metadata = useSelector((state) => state.recipeReducer.metadata);
    const recipe_ingredient_components = useSelector((state) => state.recipeReducer.recipe_ingredient_components);

    const onSave = () => {
        console.log(metadata);
        console.log(recipe_ingredient_components);
    }

    const onDelete = () => {

    }

    const onPublish = () => {

    }

    return (
        <div className="recipe-form">
            <div className="recipe-form-container">
                <RecipeMetadataForm/>
                <IngredientForm/>
                <InstructionForm/>
                <NoteForm/>
                <br/>
                <div className="recipe-form-button-options-container ">
                    <Button color="error" variant="contained"  onClick={() => onDelete()}>Delete</Button>
                    <Button color="success" variant="contained" onClick={() => onSave()}>Save</Button>
                    <Button variant="contained"  onClick={() => onSave()}>Publish</Button>
                </div>
            </div>
        </div>
    );
};

export default RecipeForm;