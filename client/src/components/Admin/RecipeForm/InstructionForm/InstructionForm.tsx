import React, { useState } from 'react';
import { Button } from '@mui/material';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import RecipeInstructionalComponent from './RecipeInstructionalCompnent.tsx';
import { updateRecipeInstructionalComponent } from '../../../../store/actions/recipeActions.js';
import '../RecipeForm.css';

const IngredientForm = () => {
    const dispatch = useDispatch();

    const [recipeComponents, setRecipeComponents] = useState([
        {
            id: '0',
            component_name: '',
            type: "instruction",
            recipe_instructions: []
        }
    ]);

    const addRecipeComponent = () => {
        const newId = String(recipeComponents.length);
        const newComponent = {
            id: newId,
            component_name: '',
            type: "instruction",
            recipe_instructions: []
        };
        setRecipeComponents([...recipeComponents, newComponent]);
    };

    const deleteRecipeComponent = (idToDelete: string) => {
        const updatedComponents = recipeComponents.filter(component => component.id !== idToDelete);
        setRecipeComponents(updatedComponents);
        dispatch(updateRecipeInstructionalComponent(updatedComponents));
    };

    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        const newComponents = Array.from(recipeComponents);
        const [reorderedComponent] = newComponents.splice(result.source.index, 1);
        newComponents.splice(result.destination.index, 0, reorderedComponent);
        setRecipeComponents(newComponents);
        dispatch(updateRecipeInstructionalComponent(newComponents));
    };

    const updateRecipeComponent = (idToUpdate: string, updatedData: any) => {
        const updatedComponents = recipeComponents.map(component => {
            if (component.id === idToUpdate) {
                return {
                    ...component,
                    component_name: updatedData.component_name,
                    recipe_instructions: updatedData.recipeInstructionList
                };
            }
            return component;
        });

        setRecipeComponents(updatedComponents);
        dispatch(updateRecipeInstructionalComponent(updatedComponents));
    };

    return (
        <div>
            <h1>Instructions</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {recipeComponents.map((recipeComponent, index) => (
                                <Draggable key={recipeComponent.id} draggableId={recipeComponent.id} index={index}>
                                    {(provided, snapshot) => (
                                        <RecipeInstructionalComponent
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
