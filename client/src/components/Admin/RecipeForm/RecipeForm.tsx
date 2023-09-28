import React from "react";
import { Button, Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'; // Assuming you have a Redux store set up.
import { createRecipe, getMetricsAndIngredients, getRecipe, updateRecipeStatus} from '../../../apis/AdminAPI/RecipeAPI';
import FormData from 'form-data';
import './RecipeForm.css';
import { useLocation, useNavigate } from 'react-router-dom';
import SummaryForm from "./Summary/SummaryForm";
import MetadataForm from "./Metadata/MetadataForm";
import IngredientForm from "./Ingredients/IngredientForm";
import InstructionForm from "./Instructions/InstructionForm";
import NoteForm from "./Notes/NoteForm";

const RecipeForm = () => {
    const metadata = useSelector((state: any) => state.recipeReducer.metadata);
    const summary = useSelector((state: any) => state.recipeReducer.summary);
    const recipeIngredientComponents = useSelector((state: any) => state.recipeReducer.recipeIngredientComponents);
    const recipeInstructionalComponents = useSelector((state: any) => state.recipeReducer.recipeInstructionalComponents);
    const notes = useSelector((state: any) => state.recipeReducer.notes);

    const checkData = () => {
        console.log(metadata);
        console.log(summary);
        console.log(recipeIngredientComponents);
        console.log(recipeInstructionalComponents);
        console.log(notes);
    }

    return (
        <div className="recipe-form">
            <Button color="error" variant="contained" onClick={() => {}}>
                Back
            </Button>
            <div className="recipe-form-container">
                <h1>Recipe Form</h1>
                <MetadataForm/>
                <SummaryForm/>
                <IngredientForm/>
                <InstructionForm/>
                <NoteForm/>
                {/* Gallery */}
                <div className="recipe-form-button-options-container">
                    <Button variant="contained" onClick={checkData}>Create</Button>
                    <Button variant="contained" color="success" >Publish</Button>
                </div>

            </div>
        </div>
    )
}

export default RecipeForm;