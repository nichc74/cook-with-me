import React, {useState} from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button, Paper, TextField, Box} from '@mui/material';
import IngredientItem from './IngredientItem.tsx';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import '../RecipeForm.css';

interface recipeComponents {
    id: string,
    component: string,
    ingredients: []
    // Define the properties of an ingredient here
}

const IngredientsRecipeComponent = ({ provided, snapshot, recipeComponent, deleteRecipeComponent}) => {
    const [recipeComponentName, setRecipeComponentName] = useState("");
    const [recipeIngredients, setRecipeIngredients] = useState(Array(5).fill({}).map((_, i) => ({ id: i + "" })));
    
    const addIngredient = () => {
        setRecipeIngredients([...recipeIngredients, {id: recipeIngredients.length + 1 + ""}])
    }

    const handleRecipeComponentNameInput = (e) => {
        setRecipeComponentName(e.target.value)
    };

    const deleteIngredient = (id: string) => {
        const temp = [...recipeIngredients];
        for (var inIdx = 0; inIdx < recipeIngredients.length; inIdx++) {
            if (recipeIngredients[inIdx].id == id) {
                temp.splice(inIdx, 1);
                break;
            }
        }
        setRecipeIngredients(temp);
    }

    const onDragEnd = (result: any) => {
        const newItems = Array.from(recipeIngredients);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setRecipeIngredients(newItems);
    };

    return (
        <Box  
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
            <Paper elevation={2} style={{width: "", padding: 10, background: "#fffcf5"}}>
                <Paper>
                    <TextField id="amount" 
                        size="medium" 
                        label="Section" 
                        fullWidth
                        variant="outlined" 
                        onChange={handleRecipeComponentNameInput}
                        value={recipeComponentName} />
                </Paper>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {recipeIngredients.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                    <IngredientItem
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
                    <Button variant="contained" onClick={() => addIngredient()}><AddIcon/></Button>
                    <Button color="error" variant="contained" onClick={() => deleteRecipeComponent(recipeComponent.id)}><DeleteIcon/></Button>
                </div>
            </Paper>    
            
        </Box>
    )
}

export default IngredientsRecipeComponent;