import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Button, Paper, TextField, Box } from '@mui/material';
import InstructionItem from './InstructionItem.tsx';
import AddIcon from '@mui/icons-material/Add';
import ReorderIcon from '@mui/icons-material/Reorder';
import DeleteIcon from '@mui/icons-material/Delete';
import '../RecipeForm.css';

const RecipeInstructionalComponent = ({ provided, snapshot, recipeComponent, deleteRecipeComponent, updateRecipeComponent }) => {
    const [recipeComponentName, setRecipeComponentName] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState(
        new Array(5).fill({}).map((_, i) => ({ id: i + '', description: "", is_image: false}))
    );

    const addIntruction = () => {
        setRecipeInstructions([...recipeInstructions, { id: (recipeInstructions.length ).toString(), description: "", is_image: false }]);
    };

    const handleRecipeComponentNameInput = (value: string) => {
        setRecipeComponentName(value);
        updateComponent(value, recipeInstructions);
    };

    const deleteInstruction = (idToDelete: string) => {
        const updatedComponents = recipeInstructions.filter(component => component.id !== idToDelete);
        setRecipeInstructions(updatedComponents);
        updateComponent(recipeComponentName, updatedComponents);
    };

    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const newItems = Array.from(recipeInstructions);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setRecipeInstructions(newItems);
        updateComponent(recipeComponentName, newItems);
    };

    const updateInstruction = (id: string, updatedInstruction: any) => {
        console.log(updatedInstruction);
        const updatedInstructions = recipeInstructions.map(instruction => {
            if (instruction.id === id) {
                return {
                    ...instruction,
                    description: updatedInstruction.description,
                    is_image: updatedInstruction.is_image
                };
            }
            return instruction;
        });
    
        setRecipeInstructions(updatedInstructions);
        updateComponent(recipeComponentName, updatedInstructions);
    };

    const updateComponent = (componentName: string, recipeInstructionList: any) => {
        var component_data = {
            component_name: componentName,
            recipeInstructionList: recipeInstructionList
        }
        updateRecipeComponent(recipeComponent.id, component_data);
    }

    return (
        <Box ref={provided.innerRef} snapshot={snapshot} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Paper elevation={2} style={{ width: '', padding: 10, background: '#fffcf5' }}>
                <div className="" style={{ display: 'flex', flexDirection: 'row', background: 'white' }}>
                    <TextField
                        id="amount"
                        size="medium"
                        label="Instruction Section"
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
                                {recipeInstructions.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <InstructionItem
                                                updateInstruction={updateInstruction}
                                                provided={provided}
                                                snapshot={snapshot}
                                                item={item}
                                                deleteInstruction={deleteInstruction}
                                            />
                                        )}
                                    </Draggable>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className="ingredient-section-buttons">
                    <Button variant="contained" onClick={addIntruction}>
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

export default RecipeInstructionalComponent;
