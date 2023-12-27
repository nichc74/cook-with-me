import React, { useState, useEffect } from "react";
import IngredientItem from "./IngredientItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Box, Button, Paper, TextField } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

interface IngredientComponentProps {
    updateComponent: Function,
    removeComponent: Function,
    index: number,
    metricPresets: Array<string>,
    ingredientPresets: Array<string>,
    ingredientComponent: {
        component_name: string,
        ingredients: Array<IngredientProps>
    }
}

interface IngredientProps {
    id: string | null,
    amount: string,
    metric: string,
    name: string,
}

const IngredientComponent = ({updateComponent, removeComponent, ingredientComponent, metricPresets, ingredientPresets, index}: IngredientComponentProps) => {
    const[componentName, setComponentName] = useState(ingredientComponent.component_name || "");
    const[ingredients, setIngredients] = useState(ingredientComponent.ingredients);

    useEffect(() => {
        updateComponent({
            componentName,
            ingredients
        }, index);
    }, [componentName, ingredients]);

    const handleComponentNameInput = (value: string) => {
        setComponentName(value);
    }

    const addNewIngredient = () => {
        setIngredients([...ingredients, {id: ingredients.length - 1 + "", amount: "", metric: "", name: ""}]);
    }

    const removeIngredient = (index: number) => {
        const updatedIngredients = ingredients.filter((_, idx) => idx !== index);
        setIngredients(updatedIngredients);
    }

    const updateIngredientList = (updatedIngredient: IngredientProps, index: number) => {
        let updatedIngredients = ingredients.map((ingredient, idx) => {
            if (index === idx) {
                return {
                    ...ingredient,
                    amount: updatedIngredient.amount,
                    metric: updatedIngredient.metric,
                    name: updatedIngredient.name
                };
            }
            return ingredient;
        })
        setIngredients(updatedIngredients);
    }

    const onDragEnd = (result: any) => {
        const newItems = Array.from(ingredients);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        console.dir(newItems);
        setIngredients(newItems);
    };
    
    return (
        <Box>
            <Paper style={{padding: 10}}>
                <TextField fullWidth 
                    variant="filled"
                    label="Component Name" 
                    value={componentName}
                    onChange={(e) => handleComponentNameInput(e.target.value)}
                />
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                ingredients.map((ingredient, index) => (
                                    <Draggable key={ingredient.id} draggableId={ingredient.id + ""} index={index}>
                                        {(provided, snapshot) => (
                                            <IngredientItem 
                                                provided={provided}
                                                snapshot={snapshot}
                                                index={index}
                                                key={ingredient.id}
                                                ingredientPresets={ingredientPresets}
                                                metricPresets={metricPresets}
                                                ingredient={ingredient}
                                                removeIngredient={() => removeIngredient(index)}
                                                updateIngredientList={updateIngredientList}
                                            />
                                        )}
                                    </Draggable>
                                ))
                            }
                        </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className="ingredient-section-buttons">
                    <Button variant="contained" onClick={() => addNewIngredient()}><Add/></Button>
                    <Button variant="contained" color="error" onClick={() => removeComponent(index)}><Delete/></Button>
                </div>
            </Paper>   
            <br/> 
        </Box>
    )
}
export default IngredientComponent;