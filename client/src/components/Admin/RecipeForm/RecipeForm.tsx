import React, { useEffect, useState } from "react";
import { Button, Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'; // Assuming you have a Redux store set up.
import { createRecipe, getMetricsAndIngredients, getRecipe, updateRecipeStatus} from '../../../apis/AdminAPI/RecipeAPI';
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

    const [metricsAndIngredients, setMetricsAndIngredients] = useState([]);
    // const [recipeData, setRecipeData] = useState({});
    const [recipeMetadata, setRecipeMetadata] = useState({});
    const [recipeSummary, setRecipeSummary] = useState("");
    const [ingredientElements, setIngredientElements] = useState([])
    const [instructionalElements, setInstructionalElements] = useState([])
    const [recipeNotes, setRecipeNotes] = useState([]);
    const [loading, setLoading] = useState(false);

    const metadata = useSelector((state: any) => state.recipeReducer.metadata);
    const summary = useSelector((state: any) => state.recipeReducer.summary);
    const recipeIngredientComponents = useSelector((state: any) => state.recipeReducer.recipeIngredientComponents);
    const recipeInstructionalComponents = useSelector((state: any) => state.recipeReducer.recipeInstructionalComponents);
    const notes = useSelector((state: any) => state.recipeReducer.notes);

   
    useEffect(() => {
        if (location.state) {
            fetchRecipeToEdit();
        }
        fetchMetricsAndIngredients();
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
            console.log(data.recipe_summary[0].summary);
            setLoading(false);

        } catch (error: any) {

        }
    }

    const fetchMetricsAndIngredients = async () => {
        try {
            const presets = await getMetricsAndIngredients();
            setMetricsAndIngredients(presets);
        } catch (error: any) {
            // handleApiError('fetching metrics and ingredients', error);
        }
    }


    const checkData = () => {
        console.log(metadata);
        console.log(summary);
        console.log(recipeIngredientComponents);
        console.log(recipeInstructionalComponents);
        console.log(notes);

        try {
            const formData = new FormData();
            formData.append('metadata', JSON.stringify(metadata));
            formData.append('summary', summary);
            formData.append('recipeIngredientComponents', JSON.stringify(recipeIngredientComponents));
            formData.append('recipeInstructionalComponents', JSON.stringify(recipeInstructionalComponents));
            formData.append('notes', JSON.stringify(notes));
            console.log(formData)
            // const result = await createRecipe(formData);
        } catch (error: any) {
            console.log(error);
        }
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
                    <MetadataForm metadata={recipeMetadata}/>
                    <SummaryForm recipeSummary={recipeSummary}/>
                    <IngredientForm 
                        presets={metricsAndIngredients}
                        ingredientElements={ingredientElements}
                    />
                    <InstructionForm
                        instructionalElements={instructionalElements}
                    />
                    <NoteForm recipeNotes={recipeNotes}/>
                    {/* Gallery */}
                    <div className="recipe-form-button-options-container">
                        <Button variant="contained" onClick={checkData}>Create</Button>
                        <Button variant="contained" color="success" >Publish</Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RecipeForm;