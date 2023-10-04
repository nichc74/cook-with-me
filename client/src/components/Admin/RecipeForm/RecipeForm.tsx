import React, { useEffect, useState } from "react";
import { Button, Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe, getRecipe, getFormPresets } from '../../../apis/AdminAPI/RecipeAPI.ts';
import FormData from 'form-data';
import './RecipeForm.css';
import { useLocation, useNavigate } from 'react-router-dom';
import MetadataForm from "./Metadata/MetadataForm";
import SummaryForm from "./Summary/SummaryForm";
import IngredientForm from "./Ingredients/IngredientForm";
import InstructionForm from "./Instructions/InstructionForm";
import NoteForm from "./Notes/NoteForm";

const RecipeForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [formPresets, setFormPresets] = useState({
        categories: [],
        metrics: [],
        ingredients: []
    });

    const [recipeMetadata, setRecipeMetadata] = useState({});
    const [recipeSummary, setRecipeSummary] = useState("");
    const [ingredientElements, setIngredientElements] = useState<Array<object> | null>(null)
    const [instructionalElements, setInstructionalElements] = useState<Array<object> | null>(null)
    const [recipeNotes, setRecipeNotes] = useState<Array<object> | null>(null);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);

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
            const data = await getRecipe(location.state.url_slug, location.state.id);
            // setRecipeData(data);
            setRecipeMetadata(data.metadata);
            setRecipeSummary(data.recipe_summary[0].summary);
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
            console.log(presets);
            setFormPresets(presets);
        } catch (error: any) {
            // handleApiError('fetching metrics and ingredients', error);
        }
    }


    const createRecipeData = async () => {
        try {
            prepFormData();
            formData.append('status',  "unpublished");
            const result = await createRecipe(formData);
        } catch (error: any) {
            console.log(error);
        }
    }

    const publishRecipeData = async () => {
        prepFormData();
        formData.append('status',  "published");
        const result = await createRecipe(formData);
    }

    const prepFormData = () => {
        formData.append('metadata', JSON.stringify(metadata));
        formData.append('summary', summary);
        formData.append('recipeIngredientComponents', JSON.stringify(recipeIngredientComponents));
        formData.append('recipeInstructionalComponents', JSON.stringify(recipeInstructionalComponents));
        formData.append('notes', JSON.stringify(notes));
    }

    const onBack = () => {
        navigate('/admin');
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
                    <MetadataForm categoryPresets={formPresets.categories} metadata={recipeMetadata}/>
                    <SummaryForm recipeSummary={recipeSummary}/>
                    <IngredientForm 
                        metricPresets={formPresets.metrics}
                        ingredientPresets={formPresets.ingredients}
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
        </div>
    )
}

export default RecipeForm;