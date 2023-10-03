import React, { useEffect, useState } from 'react';
import RecipeMetadataForm from './RecipeMetadataForm.tsx';
import IngredientForm from './IngredientForm/IngredientForm.tsx';
import InstructionForm from './InstructionForm/InstructionForm.tsx';
import NoteForm from './NoteForm/NoteForm.tsx';
import { Button, Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'; // Assuming you have a Redux store set up.
import { createRecipe, getRecipe, updateRecipeStatus} from '../../../apis/AdminAPI/RecipeAPI';
import FormData from 'form-data';
import './RecipeForm.css';
import { useLocation, useNavigate } from 'react-router-dom';

interface RecipeFormProps {
    recipe: Object; // Replace 'RecipeType' with the actual type of your recipe
}

interface RecipeData {
    metadata: {
        author: string,
        category: string,
        cook_time: Number,
        cuisine: string,
        id: Number,
        image: string,
        prep_time: Number,
        serves: Number,
        source_link: string,
        status: string,
        title: string,
        url_slug: string
    },
    summary: string; 
}

interface State {
    openSnackbar: boolean;
    snackbarMessage: string;
    severity: "success" | "error" | "";
    recipeData: RecipeData | {};
    metricsAndIngredients: Array<Object>; // Replace with the actual type
}
const RecipeForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [editting, setEdit] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState("");
    const [recipeData, setRecipeData] = useState<RecipeData | {}>({});
    const [loading, setLoading] = useState(false);
    const [recipeStatus, setRecipeStatus] = useState("unpublished");

    const metadata = useSelector((state: any) => state.recipeReducer.metadata);
    const summary = useSelector((state: any) => state.recipeReducer.summary);
    const recipeIngredientComponents = useSelector((state: any) => state.recipeReducer.recipeIngredientComponents);
    const recipeInstructionalComponents = useSelector((state: any) => state.recipeReducer.recipeInstructionalComponents);
    const notes = useSelector((state: any) => state.recipeReducer.notes);

    const [metricsAndIngredients, setMetricsAndIngredients] = useState([]);

    useEffect(() => {
        if (location.state) {
            fetchRecipeToEdit();
            setEdit(true);
        }
        fetchMetricsAndIngredients();
    }, []);

    const fetchRecipeToEdit = async () => {
        const data = await getRecipe(location.state.url_slug, location.state.id);
        setRecipeData(data);
    }

    const fetchMetricsAndIngredients = async () => {
        try {
            const presets = await getMetricsAndIngredients();
            console.log(presets);
            setMetricsAndIngredients(presets);
        } catch (error: any) {
            handleApiError('fetching metrics and ingredients', error);
        }
    }

    const onSave = async () => {
        try {
            const formData = new FormData();
            formData.append('status', recipeStatus);
            formData.append('metadata', JSON.stringify(metadata));
            formData.append('summary', summary);
            formData.append('recipeIngredientComponents', JSON.stringify(recipeIngredientComponents));
            formData.append('recipeInstructionalComponents', JSON.stringify(recipeInstructionalComponents));
            formData.append('notes', JSON.stringify(notes));

            const result = await createRecipe(formData);
            handleApiResult(result);
        } catch (error: any) {
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

    const onPublish = async () => {
        try {
            setRecipeStatus("published");
            setOpenSnackbar(true);
            setSnackbarMessage('Recipe published successfully');
            setSeverity('success');
        } catch (error) {
            handleApiError('publishing recipe', error);
        }
    };
    
    const onBack = () => {
        navigate('/admin');
    }

    return (
        <div className="recipe-form">
            <Button color="error" variant="contained" onClick={() => onBack()}>
                Back
            </Button>
            <div className="recipe-form-container">
                <RecipeMetadataForm recipeMetadata={recipeData.metadata} recipeSummary={recipeData.recipe_summary}/>
                {/* <RecipeMetadataForm recipeMetadata={recipeData.metadata} recipeSummary={"Hello World"}/> */}
                <IngredientForm presets={metricsAndIngredients} recipeIngredientComponents={recipeData.recipe_ingredient_components} />
                <InstructionForm recipeInstructionalComponents={recipeData.recipe_instructional_components}/>
                <NoteForm recipesNotes={recipeData.notes}/>
                <br />
                <div className="recipe-form-button-options-container">
                    {editting ? 
                        <Button color="success" variant="contained" onClick={() => onEdit()}>
                            Update
                        </Button>
                        :
                        <Button color="success" variant="contained" onClick={() => onSave()}>
                            Create
                        </Button>
                    }
                    <Button variant="contained" onClick={() => onPublish()}>
                        Publish
                    </Button>
                </div>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}>
                <Alert>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default RecipeForm;
