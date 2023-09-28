import React, { useEffect, useState } from "react";
import {updateRecipeIngredientComponent} from  '../../../../store/actions/recipeActions.js';
import IngredientComponent from "./IngredientComponent";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { getMetricsAndIngredients } from "../../../../apis/AdminAPI/RecipeAPI.js";

interface IngredientComponentProps {
    componentName: string
    ingredients: Array<Object>
}

interface RecipeFormProps {
    presets: {
        metrics: Array<string>,
        ingredients:  Array<string>,
    }
}

const IngredientForm = ({presets}: RecipeFormProps) => {
    const dispatch = useDispatch();
    const [ingredientComponents, setIngredientComponents] = useState([{}]);
   
    useEffect(() => {
        dispatch(updateRecipeIngredientComponent(ingredientComponents));
    }, [ingredientComponents]);

    const addNewComponent = () => {
        setIngredientComponents([...ingredientComponents, { componentName: "", ingredients: []}]);
    }

    const removeComponent = (index: Number) => {
        const updatedComponents = ingredientComponents.filter((_, idx) => idx !== index);
        setIngredientComponents(updatedComponents);
    }

    const updateComponent = (updatedComponent: IngredientComponentProps, index: number) => {
        let updatedIngredients = ingredientComponents.map((component, idx) => {
            if (index === idx) {
                return {
                    ...component,
                    componentName: updatedComponent.componentName,
                    ingredients: updatedComponent.ingredients,
                };
            }
            return component;
        })
        setIngredientComponents(updatedIngredients);
    }
    


    return (
        <div>
            <h1> Ingredients </h1>
            {
                ingredientComponents.map((component, index) => (
                    <IngredientComponent
                        key={index}
                        index={index}
                        presets={presets}
                        updateComponent={updateComponent}
                        removeComponent={removeComponent}
                    />
                ))
            }
            <Button fullWidth variant="contained" onClick={() => addNewComponent()}>Add Ingredient Component</Button>
        </div>
    )
}

export default IngredientForm;