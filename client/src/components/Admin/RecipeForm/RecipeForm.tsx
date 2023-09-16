import React, { useEffect, useState } from 'react';
import './RecipeForm.css';
import RecipeMetadataForm from './RecipeMetadataForm.tsx';
import IngredientForm from './IngredientForm/IngredientForm.tsx';
import InstructionForm from './InstructionForm/InstructionForm.tsx';
import NoteForm from './NoteForm/NoteForm.tsx';
import { Button, Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'; // Assuming you have a Redux store set up.
import { createRecipe, getMetricsAndIngredients } from '../../../apis/AdminAPI/RecipeAPI';
import FormData from 'form-data';

interface Metadata {
    title: string;
    author: string;
    prepTime: number;
    cookTime: number;
    cuisineType: string;
    category: string;
    servings: number;
    summary: string;
}

const RecipeForm: React.FC = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState("");

    const metadata = useSelector((state) => state.recipeReducer.metadata);
    const summary = useSelector((state) => state.recipeReducer.summary);
    const recipeIngredientComponents = useSelector((state) => state.recipeReducer.recipeIngredientComponents);
    const recipeInstructionalComponents = useSelector((state) => state.recipeReducer.recipeInstructionalComponents);
    const notes = useSelector((state) => state.recipeReducer.notes);

    const [metricsAndIngredients, setMetricsAndIngredients] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchMetricsAndIngredients();
    }, []);

    const fetchMetricsAndIngredients = async () => {
        try {
            const presets = await getMetricsAndIngredients();
            console.log(presets);
            setMetricsAndIngredients(presets);
        } catch (error) {
            handleApiError('fetching metrics and ingredients', error);
        }
    }

    const onSave = async () => {
        try {
            const formData = new FormData();

            formData.append('metadata', JSON.stringify(metadata));
            formData.append('summary', JSON.stringify(summary));
            formData.append('recipeIngredientComponents', JSON.stringify(recipeIngredientComponents));
            formData.append('recipeInstructionalComponents', JSON.stringify(recipeInstructionalComponents));
            formData.append('notes', JSON.stringify(notes));

            const result = await createRecipe(formData);
            handleApiResult(result);
        } catch (error) {
            handleApiError('saving recipe', error);
        }
    }

    const handleApiResult = (result: any) => {
        setOpenSnackbar(true);
        setSnackbarMessage(result.statusText);
        setSeverity(result.statusCode === 200 ? "success" : "error");
    }

    const handleApiError = (action: string, error: Error) => {
        setOpenSnackbar(true);
        setSnackbarMessage(`Error ${action}: ${error.message}`);
        setSeverity("error");
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const onDelete = () => {
        // Implement delete functionality here
    }

    const onPublish = () => {
        // Implement publish functionality here
    }

    return (
        <div className="recipe-form">
            <div className="recipe-form-container">
                <RecipeMetadataForm />
                <IngredientForm presets={metricsAndIngredients} />
                <InstructionForm />
                <NoteForm />
                <br />
                <div className="recipe-form-button-options-container">
                    <Button color="error" variant="contained" onClick={() => onDelete()}>
                        Delete Recipe
                    </Button>
                    <Button color="success" variant="contained" onClick={() => onSave()}>
                        Save Draft
                    </Button>
                    <Button variant="contained" onClick={() => onPublish()}>
                        Publish Recipe
                    </Button>
                </div>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}>
                <Alert
                    severity={severity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default RecipeForm;
