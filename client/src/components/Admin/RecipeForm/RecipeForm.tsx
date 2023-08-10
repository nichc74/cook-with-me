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
    const summary = useSelector((state) => state.recipeReducer.summary)
    const recipe_ingredient_components = useSelector((state) => state.recipeReducer.recipe_instructional_components);
    const recipe_instructional_components = useSelector((state) => state.recipeReducer.recipe_ingredient_components);
    const notes = useSelector((state) => state.recipeReducer.notes);

    const onSave = () => {
        console.log("================= metadata =================");
        console.log(metadata);
        console.log("================= summary =================");
        console.log(summary)
        console.log("================= recipe_ingredient_components =================");
        console.log(recipe_ingredient_components);
        console.log("================= recipe_instructional_components =================");
        console.log(recipe_instructional_components);
        console.log("================= notes =================");
        console.log(notes);
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