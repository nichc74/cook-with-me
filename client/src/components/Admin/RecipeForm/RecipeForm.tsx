import React, { useState } from 'react';
import './RecipeForm.css';
import RecipeMetadataForm from './RecipeMetadataForm.tsx';
// import RecipeImageUploader from './RecipeImageUploader.tsx'
import IngredientForm from './IngredientForm/IngredientForm.tsx';
import InstructionForm from './InstructionForm/InstructionForm.tsx';
import NoteForm from './NoteForm/NoteForm.tsx';
import { Button } from '@mui/material';

interface Ingredient {
  // Define the properties of an ingredient here
}

interface Instruction {
  // Define the properties of an instruction here
}

interface Note {
  // Define the properties of a note here
}

const RecipeForm: React.FC = () => {
  const [basicInfo, setBasicInfo] = useState<any>();
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [instructions, setInstructions] = useState<Instruction[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);

  const setMetadataOnForm = (metadata: {}) => {
    console.log(metadata);
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

  return (
    <div className="recipe-form">
      <div className="recipe-form-container">
        <RecipeMetadataForm setMetadataOnForm={setMetadataOnForm} />
        {/* <RecipeImageUploader/> */}
        <IngredientForm setRecipeIngredientsOnForm={setRecipeIngredientsOnForm} />
        <InstructionForm setRecipeInstructionsOnForm={setRecipeInstructionsOnForm} />
        <NoteForm setRecipeNotesOnForm={setRecipeNotesOnForm} />
        <br/>
        <div className="recipe-form-button-options-container ">
            <Button color="error" variant="contained" >Delete</Button>
            <Button color="success" variant="contained">Save</Button>
            <Button variant="contained">Publish</Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;