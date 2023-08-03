import React, { useState } from 'react';
import './RecipeForm.css';
import RecipeMetadataForm from './RecipeMetadataForm.tsx';
import IngredientForm from './IngredientForm/IngredientForm.tsx';
import InstructionForm from './InstructionForm/InstructionForm.tsx';
import NoteForm from './NoteForm/NoteForm.tsx';
import { Button } from '@mui/material';


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
    const [metadata, setMetadata] = useState<Metadata>({});
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [instructions, setInstructions] = useState<Instruction[]>([]);
    const [notes, setNotes] = useState<Note[]>([]);

    const setMetadataOnForm = () => {
        setMetadata(metadata);
    };

    const setRecipeIngredientsOnForm = (ingredients: Ingredient[]) => {
        setIngredients(ingredients);
    };

    const setRecipeInstructionsOnForm = (instructions: Instruction[]) => {
        setInstructions(instructions);
    };

    const setRecipeNotesOnForm = (notes: Note[]) => {
        setNotes(notes);
    };

    const onSave = () => {
        console.log(metadata);
    }

    const onDelete = () => {
        console.log(metadata);
    }

    const onPublish = () => {
        console.log(metadata);
    }

    return (
        <div className="recipe-form">
            <div className="recipe-form-container">
                <RecipeMetadataForm setMetadataOnForm={setMetadataOnForm} />
                <IngredientForm setRecipeIngredientsOnForm={setRecipeIngredientsOnForm} />
                <InstructionForm setRecipeInstructionsOnForm={setRecipeInstructionsOnForm} />
                <NoteForm setRecipeNotesOnForm={setRecipeNotesOnForm} />
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