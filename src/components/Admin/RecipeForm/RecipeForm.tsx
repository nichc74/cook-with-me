import React, { useEffect, useState } from "react";
import { Button, Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe, getRecipeBySlug, getFormPresets } from '../../../apis/AdminAPI/RecipeAPI.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MetadataForm from "./Metadata/MetadataForm";
import SummaryForm from "./Summary/SummaryForm";
import IngredientForm from "./Ingredients/IngredientForm";
import InstructionForm from "./Instructions/InstructionForm";
import NoteForm from "./Notes/NoteForm";
import FormData from 'form-data';
import Recipe from '../../Recipe/Recipe';
import './RecipeForm.css';

const RecipeForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [formPresets, setFormPresets] = useState({
        categories: [],
        metrics: [],
        ingredients: [],
        cuisines: []
    });

    const [recipeMetadata, setRecipeMetadata] = useState({});
    const [recipeSummary, setRecipeSummary] = useState({});
    const [ingredientElements, setIngredientElements] = useState<Array<object> | null>(null)
    const [instructionalElements, setInstructionalElements] = useState<Array<object> | null>(null)
    const [recipeNotes, setRecipeNotes] = useState<Array<object> | null>(null);

    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const metadata = useSelector((state: any) => state.recipeReducer.metadata);
    const summary = useSelector((state: any) => state.recipeReducer.summary);
    const recipeIngredientComponents = useSelector((state: any) => state.recipeReducer.recipeIngredientComponents);
    const recipeInstructionalComponents = useSelector((state: any) => state.recipeReducer.recipeInstructionalComponents);
    const notes = useSelector((state: any) => state.recipeReducer.notes);

    const formData = new FormData();
   
    useEffect(() => {
        if (location.state) {
            fetchRecipeToEdit();
            setEditing(true);
        }
        fetchFormPresets();
    }, []);

    const fetchRecipeToEdit = async () => {
        setLoading(true);

        try {
            const data = await getRecipeBySlug(location.state.url_slug);
            // setRecipeData(data);
            setRecipeMetadata(data.metadata);
            setRecipeSummary(data.recipe_summary);
            setIngredientElements(data.recipe_ingredient_components);
            setInstructionalElements(data.recipe_instructional_components);
            setRecipeNotes(data.notes);
            setLoading(false);

        } catch (error: any) {

        }
    }

    const fetchFormPresets = async () => {
        try {
            const presets = await getFormPresets();
            setFormPresets(presets);
        } catch (error: any) {
            // handleApiError('fetching metrics and ingredients', error);
        }
    }


    const createRecipeData = async () => {
        try {
            prepFormData();
            formData.append('status', "unpublished");
            const result = await createRecipe(formData);
            handleApiResult(result);
            navigate(`/recipes${result.url_slug}/${result.id}`);
        } catch (error: any) {
            console.log(error);
        }
    }

    const publishRecipeData = async () => {
        try {
            prepFormData();
            formData.append('status',  "published");
            const result = await createRecipe(formData);
            handleApiResult(result.url_slug);
            navigate(`/recipes${result.url_slug}/${result.id}`);
        }   
        catch (error : any) {
            console.log(error);
        }
    }

    const prepFormData = () => {
        formData.append('metadata', JSON.stringify(metadata));
        formData.append('summary', JSON.stringify(summary));
        formData.append('recipeIngredientComponents', JSON.stringify(recipeIngredientComponents));
        formData.append('recipeInstructionalComponents', JSON.stringify(recipeInstructionalComponents));
        formData.append('notes', JSON.stringify(notes));
    }

    const onBack = () => {
        navigate('/admin');
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleApiResult = (result: any) => {
        setOpenSnackbar(true);
        setSnackbarMessage(result.Message);
    }

    return (
        <div className="recipe-form">
            <Button color="error" variant="contained" onClick={() => onBack()}>
                Back
            </Button>

            {loading ? (
                "Loading ..."
            ) : (
                <div className="recipe-form-container">
                    <h1>Recipe Form</h1>
                    <MetadataForm 
                        categoryPresets={formPresets.categories.map((category, index) => category.name)} 
                        cuisinePresets={formPresets.cuisines.map((cuisine, index) => cuisine.name)}
                        metadata={recipeMetadata}
                    />
                    <SummaryForm recipeSummary={recipeSummary}/>
                    <IngredientForm 
                        metricPresets={formPresets.metrics.map((metric) => metric.name)}
                        ingredientPresets={formPresets.ingredients.map((ingredient) => ingredient.name)}
                        ingredientElements={ingredientElements}
                    />
                    <InstructionForm
                        instructionalElements={instructionalElements}
                    />
                    <NoteForm recipeNotes={recipeNotes}/>
                    {/* Gallery */}
                    <div className="recipe-form-button-options-container">
                        {editing ? 
                            <Button variant="contained" onClick={() => {createRecipeData()}}>Update</Button>
                            :
                            <Button variant="contained" onClick={() => {createRecipeData()}}>Create</Button>
                        }
                        <Button variant="contained" color="success" onClick={() => {publishRecipeData()}} >Publish</Button>
                    </div>
                </div>
            )}
            
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}>
                <Alert>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default RecipeForm;