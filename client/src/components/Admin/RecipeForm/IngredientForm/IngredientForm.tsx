import React, {useState}  from 'react';
import { Button } from '@mui/material';
import IngredientsRecipeComponent from './IngredientsRecipeComponent.tsx';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import '../RecipeForm.css';

interface IngredientForm {
    // Define the properties of an ingredient here
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
	padding: 10,
	margin: `0 50px 15px 50px`,
	background: isDragging ? "#4a2975" : "white",
	color: isDragging ? "white" : "black",
	border: `1px solid black`,
	fontSize: `20px`,
	borderRadius: `5px`,

	...draggableStyle
})

const IngredientForm = ({setRecipeIngredientsOnForm}) => {
    const [recipeComponents, setRecipeComponents] = useState(Array(1).fill({}).map((_, i) => ({ id: i + ""})));
    
    
    const addRecipeComponent = () => {
        setRecipeComponents([...recipeComponents, {id: recipeComponents.length + 1 + ""}])
    }
    
    const deleteRecipeComponent = (id: string) => {
        const temp = [...recipeComponents];
        for (var inIdx = 0; inIdx < recipeComponents.length; inIdx++) {
            if (recipeComponents[inIdx].id == id) {
                temp.splice(inIdx, 1);
                break;
            }
        }
        setRecipeComponents(temp);
    }

    const onDragEnd = (result: any) => {
        const newItems = Array.from(recipeComponents);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setRecipeComponents(newItems);
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
                                    <IngredientsRecipeComponent
                                        provided={provided}
                                        snapshot={snapshot}
                                        recipeComponent={recipeComponent}
                                        deleteRecipeComponent={deleteRecipeComponent}
                                    />
                                )}
                            </Draggable>
                        ))}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
            <br/>            
            <Button style={{width: "100%"}} variant="contained" onClick={() => addRecipeComponent()}>Add Section</Button>
            {/* <Button variant="contained" onClick={() => setRecipeIngredientsOnForm(recipeIngredients)}>Save</Button> */}
        </div>
        
    )
}

export default IngredientForm;
