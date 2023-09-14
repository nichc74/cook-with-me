import React, { useEffect, useState } from 'react';
import './RecipeForm.css';
import RecipeMetadataForm from './RecipeMetadataForm.tsx';
import IngredientForm from './IngredientForm/IngredientForm.tsx';
import InstructionForm from './InstructionForm/InstructionForm.tsx';
import NoteForm from './NoteForm/NoteForm.tsx';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { createRecipe, getMetricsAndIngredients } from '../../../apis/AdminAPI/RecipeAPI';
import FormData from 'form-data';

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
    const recipe_ingredient_components = useSelector((state) => state.recipeReducer.recipe_ingredient_components);
    const recipe_instructional_components = useSelector((state) => state.recipeReducer.recipe_instructional_components);
    const notes = useSelector((state) => state.recipeReducer.notes);

    const [metricsAndIngredients, setMetricsAndIngredients] = useState([])

    useEffect(() => {
        fetchMetricsAndIngredients();
    }, [])

    const fetchMetricsAndIngredients = async () => {
        var presets = await getMetricsAndIngredients();
        console.log(presets)
        setMetricsAndIngredients(presets);
    }

    const onSave = () => {
        let formData = new FormData();

        formData.append('metadata', JSON.stringify(metadata));
        formData.append('summary', JSON.stringify(summary));
        formData.append('recipe_ingredient_components', JSON.stringify(recipe_ingredient_components));
        console.dir(recipe_ingredient_components);
        formData.append('recipe_instructional_components', JSON.stringify(recipe_instructional_components));

        formData.append('notes', JSON.stringify(notes));

        createRecipe(formData);
    }

    const onDelete = () => {

    }

    const onPublish = () => {

    }

    return (
        <div className="recipe-form">
            <div className="recipe-form-container">
                <RecipeMetadataForm/>
                <IngredientForm
                    presets={metricsAndIngredients}
                />
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