import React, {useState}  from 'react';
import '../RecipeForm.css';
import { Button } from '@mui/material';
import IngredientItem from './IngredientItem.tsx';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const elements = [
    { id: "1", amount: 1, metric: "cup", ingredient: "sugar" },
    { id: "2", amount: 3, metric: "cups", ingredient: "flour" },
    { id: "3", amount: 3, metric: "cloves", ingredient: "garlic"},
    { id: "4", amount: 3, metric: "cup", ingredient: "flour" }
  ];


const IngredientForm = ({setRecipeIngredientsOnForm}) => {
    const [recipeIngredients, setRecipeIngredients] = useState(elements);


    const pushIngredient = (amount, metric, ingredient) => {
        let recipeIngredient = {
            amount, metric, ingredient
        }
        setRecipeIngredients([...recipeIngredients, recipeIngredient]);
        console.log("Adding Ingredient");
        console.dir(recipeIngredients);
    }


    const addIngredient = (amount: number, metric: string, name: string) => {
        pushIngredient(amount, metric, name);
        setRecipeIngredientsOnForm(recipeIngredients)
    }


    const deleteIngredient = (index) => {
        const temp = [...recipeIngredients];
        temp.splice(index, 1)
        setRecipeIngredients(temp);
    }

    const onDragEnd = (result: any) => {
        const newItems = Array.from(recipeIngredients);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setRecipeIngredients(newItems);
    };


    return (
        <div>
            <h1> Ingredients </h1>
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
                                />
                                )}
                            </Draggable>
                        ))}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>

            <Button variant="contained" onClick={() => {}}>Add</Button>
            {/* <Button variant="contained" onClick={() => setRecipeIngredientsOnForm(recipeIngredients)}>Save</Button> */}
        </div>
        
    )
}

export default IngredientForm;
