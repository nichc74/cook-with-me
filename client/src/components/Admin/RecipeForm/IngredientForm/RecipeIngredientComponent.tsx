import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Button, Paper, TextField, Box } from '@mui/material';
import IngredientItem from './IngredientItem.tsx';
import AddIcon from '@mui/icons-material/Add';
import ReorderIcon from '@mui/icons-material/Reorder';
import DeleteIcon from '@mui/icons-material/Delete';
import '../RecipeForm.css';

const RecipeIngredientComponent = ({ provided, snapshot, recipeComponent, deleteRecipeComponent, updateRecipeComponent }) => {
    const [recipeComponentName, setRecipeComponentName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState(
        new Array(5).fill({}).map((_, i) => ({ id: i + '', ingredient: {} }))
    );

    const addIngredient = () => {
        setRecipeIngredients([...recipeIngredients, { id: (recipeIngredients.length ).toString(), ingredient: {} }]);
    };

    const handleRecipeComponentNameInput = (value: string) => {
        setRecipeComponentName(value);
        updateComponent(value, recipeIngredients);
    };

    const deleteIngredient = (idToDelete: string) => {
        const updatedComponents = recipeIngredients.filter(component => component.id !== idToDelete);
        setRecipeIngredients(updatedComponents);
        updateComponent(recipeComponentName, updatedComponents);
    };

    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const newItems = Array.from(recipeIngredients);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setRecipeIngredients(newItems);
        updateComponent(recipeComponentName, newItems);
    };

    const updateIngredient = (id: string, updatedIngredient: any) => {
        const updatedIngredients = recipeIngredients.map(ingredient => {
            if (ingredient.id === id) {
                return {
                    ...ingredient,
                    ingredient: updatedIngredient,
                };
            }
            return ingredient;
        });
    
        setRecipeIngredients(updatedIngredients);
        updateComponent(recipeComponentName, updatedIngredients);
    };

    const updateComponent = (componentName, recipeIngredientList) => {
        var component_data = {
            component_name: componentName,
            recipe_ingredients: recipeIngredientList
        }
        console.log(component_data)
        updateRecipeComponent(recipeComponent.id, component_data);
    }

    return (
        <Box ref={provided.innerRef} snapshot={snapshot} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Paper elevation={2} style={{ width: '', padding: 10, background: '#fffcf5' }}>
                <div className="" style={{ display: 'flex', flexDirection: 'row', background: 'white' }}>
                    <TextField
                        id="amount"
                        size="medium"
                        label="Section"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => handleRecipeComponentNameInput(e.target.value)}
                        value={recipeComponentName}
                    />
                    <ReorderIcon style={{ height: '100%', paddingLeft: 10, margin: 'auto' }} />
                </div>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {recipeIngredients.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <IngredientItem
                                                updateIngredient={updateIngredient}
                                                provided={provided}
                                                snapshot={snapshot}
                                                item={item}
                                                deleteIngredient={deleteIngredient}
                                            />
                                        )}
                                    </Draggable>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className="ingredient-section-buttons">
                    <Button variant="contained" onClick={addIngredient}>
                        <AddIcon />
                    </Button>
                    <Button color="error" variant="contained" onClick={() => deleteRecipeComponent(recipeComponent.id)}>
                        <DeleteIcon />
                    </Button>
                </div>
            </Paper>
        </Box>
    );
};

export default RecipeIngredientComponent;
