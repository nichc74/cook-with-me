import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import RecipeIngredientComponent from './RecipeIngredientComponent.tsx';
import { updateRecipeIngredientComponent } from '../../../../store/actions/recipeActions.js';
import '../RecipeForm.css';

interface PresetsProps {
    metricsAndIngredients: {
        metrics: Array<string>,
        ingredients: Array<string>,
    }
}

interface IngredientsFormProps {
    presets: PresetsProps,
    recipeIngredientComponents: Array<{
        id: string
        component_name: string,
        type: string,
        recipe_ingredients: Array<Object>
    }>
}

const IngredientForm = ({presets, recipeIngredientComponents}: IngredientsFormProps) => {
    const dispatch = useDispatch();

    const [recipeComponents, setRecipeComponents] = useState(recipeIngredientComponents || [
        {
            id: '0',
            component_name: '',
            type: "ingredient",
            recipe_ingredients: []
        }
    ]);

    useEffect(() => {
        if (recipeIngredientComponents) {
            setRecipeComponents(recipeIngredientComponents);
        }
    }, [recipeIngredientComponents]);

    const addRecipeComponent = () => {
        const newId = String(recipeComponents.length);
        const newComponent = {
            id: newId,
            component_name: '',
            type: "ingredient",
            recipe_ingredients: []
        };
        setRecipeComponents([...recipeComponents, newComponent]);
    };

    const deleteRecipeComponent = (idToDelete: string) => {
        const updatedComponents = recipeComponents.filter(component => component.id !== idToDelete);
        setRecipeComponents(updatedComponents);
        dispatch(updateRecipeIngredientComponent(updatedComponents));
    };

    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        const newComponents = Array.from(recipeComponents);
        const [reorderedComponent] = newComponents.splice(result.source.index, 1);
        newComponents.splice(result.destination.index, 0, reorderedComponent);
        setRecipeComponents(newComponents);
        dispatch(updateRecipeIngredientComponent(newComponents));
    };

    const updateRecipeComponent = (idToUpdate: string, updatedData: any) => {
        const updatedComponents = recipeComponents.map(component => {
            if (component.id === idToUpdate) {
                return {
                    ...component,
                    component_name: updatedData.component_name,
                    recipe_ingredients: updatedData.recipe_ingredients
                };
            }
            return component;
        });

        setRecipeComponents(updatedComponents);
        dispatch(updateRecipeIngredientComponent(updatedComponents));
    };

    

    return (
        <div>
            <h1>Ingredients</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {recipeComponents.map((recipeComponent, index) => (
                                <Draggable key={recipeComponent.id} draggableId={recipeComponent.id} index={index}>
                                    {(provided, snapshot) => (
                                        <RecipeIngredientComponent
                                            presets={presets}
                                            provided={provided}
                                            snapshot={snapshot}
                                            recipeComponent={recipeComponent}
                                            deleteRecipeComponent={deleteRecipeComponent}
                                            updateRecipeComponent={updateRecipeComponent}
                                        />
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <br />
            <Button style={{ width: '100%' }} variant="contained" onClick={addRecipeComponent}>
                Add Section
            </Button>
        </div>
    );
};

export default IngredientForm;
