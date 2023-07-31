import React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const IngredientForm = ({setRecipeIngredientsOnForm}) => {
    const [recipeIngredients, setRecipeIngredients] = useState(Array.apply(null, {length: 10}).map(Number.call, Number));
    const [ingredientAmount, setIngredientAmountInput] = useState();
    const [ingredientMetric, setIngredientMetricInput] = useState("");
    const [ingredientName, setIngredientNameInput] = useState("");

    const pushIngredient = (amount, metric, name) => {
        let recipeIngredient = {
            amount, metric, name
        }
        setRecipeIngredients([...recipeIngredients, recipeIngredient]);
        console.log("Adding Ingredient");
        console.dir(recipeIngredients);
    }


    const addIngredient = (amount: number, metric: string, name: string) => {
        pushIngredient(amount, metric, name);
        setRecipeIngredientsOnForm(recipeIngredients)
        resetInputFields();
    }

    const handleIngredientAmountInput = (e) => {
        setIngredientAmountInput(e.target.value)
    };

    const handleIngredientMetricInput = (e) => {
        setIngredientMetricInput(e.target.value)
    };

    const handleIngredientNameInput = (e) => {
        setIngredientNameInput(e.target.value)
    };

    const resetInputFields = () => {
        setIngredientAmountInput("");
        setIngredientMetricInput("");
        setIngredientNameInput("");
    };

    const deleteIngredient = (index) => {
        const temp = [...recipeIngredients];
        temp.splice(index, 1)
        setRecipeIngredients(temp);
    }


    return (
        <div>
            <h1> Ingredients </h1>
            {recipeIngredients.map((ingredient, index) => 
                <div className="ingredients-section" key = {index}>  
                    <TextField id="amount" type="number" label="Amount" variant="outlined"   />
                    <TextField id="metric" label="Metric" variant="outlined"   />
                    <TextField id="name" label="Name" variant="outlined"   />
                    <Button variant="contained" onClick={() => deleteIngredient(index)} > X </Button>
                </div>
            )}
            <Button variant="contained" onClick={() => addIngredient(parseFloat(ingredientAmount), ingredientMetric, ingredientName )}>Add New Ingredient</Button>
            {/* <Button variant="contained" onClick={() => setRecipeIngredientsOnForm(recipeIngredients)}>Save</Button> */}
        </div>
        
    )
}

export default IngredientForm;
