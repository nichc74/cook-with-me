import React, { useState } from 'react';
import { Button } from '@mui/material';
import RecipeIngredientComponent from './RecipeIngredientComponent.tsx';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import { updateRecipeIngredientComponent } from '../../../../store/actions/recipeActions.js';

import '../RecipeForm.css';

const IngredientForm = () => {
    const dispatch = useDispatch();
    const [recipeComponents, setRecipeComponents] = useState(
        new Array(1).fill({}).map((_, i) => ({ id: i + "", component_name: "", recipe_ingredients: [] }))
    );

    const addRecipeComponent = () => {
        setRecipeComponents([...recipeComponents, { id: (recipeComponents.length + 1).toString(), component_name: "", recipe_ingredients: [] }]);
    };

    const deleteRecipeComponent = (id: string) => {
        const temp = [...recipeComponents];
        for (var inIdx = 0; inIdx < recipeComponents.length; inIdx++) {
            if (recipeComponents[inIdx].id == id) {
                temp.splice(inIdx, 1);
                break;
            }
        }
        setRecipeComponents(temp);
        dispatch(updateRecipeIngredientComponent(recipeComponents));

    };

    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        const newItems = Array.from(recipeComponents);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setRecipeComponents(newItems);
        dispatch(updateRecipeIngredientComponent(recipeComponents));

    };

    const updateRecipeComponent = (id: string, component_data: any) => {
        const updatedComponents = recipeComponents.map(component => {
            if (component.id === id) {
                return {
                    ...component,
                    component_name: component_data.component_name,
                    recipe_ingredients: component_data.recipe_ingredients,
                };
            }
            return component;
        });
    
        setRecipeComponents(updatedComponents);
        dispatch(updateRecipeIngredientComponent(updatedComponents));
    };

    return (
        <div>
            <h1> Ingredients </h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {recipeComponents.map((recipeComponent, index) => (
                                <Draggable key={recipeComponent.id} draggableId={recipeComponent.id} index={index}>
                                    {(provided, snapshot) => (
                                        <RecipeIngredientComponent
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
            <Button style={{ width: "100%" }} variant="contained" onClick={addRecipeComponent}>Add Section</Button>
        </div>
    );
};

export default IngredientForm;
