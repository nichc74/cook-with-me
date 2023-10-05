import React, { useEffect, useState } from "react";
import {updateRecipeIngredientComponent} from  '../../../../store/actions/recipeActions.js';
import IngredientComponent from "./IngredientComponent";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

interface IngredientComponentProps {
    componentName: string
    ingredients: Array<Object>
}

interface RecipeFormProps {
    metricPresets: Array<string>,
    ingredientPresets:  Array<string>,

    ingredientElements: Array<IngredientComponentProps>
}

const IngredientForm = ({metricPresets, ingredientPresets, ingredientElements}: RecipeFormProps) => {
    const dispatch = useDispatch();
    const [ingredientComponents, setIngredientComponents] = useState(ingredientElements || [{}]);
   
    useEffect(() => {
        dispatch(updateRecipeIngredientComponent(ingredientComponents));
    }, [ingredientComponents]);

    const addNewComponent = () => {
        setIngredientComponents([...ingredientComponents, { componentName: "", ingredients: new Array(5).fill({id: null, amount: "", metric: "", name: ""}) }]);
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
                        metricPresets={metricPresets}
                        ingredientPresets={ingredientPresets}
                        ingredientComponent={component}
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