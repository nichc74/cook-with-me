import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const IngredientItem = ({ provided, snapshot, item }) => {
    const [ingredientAmount, setIngredientAmountInput] = useState();
    const [ingredientMetric, setIngredientMetricInput] = useState("");
    const [ingredientName, setIngredientNameInput] = useState("");

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

    return (
        <div className="ingredients-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
                <TextField id="amount" type="number" label="Amount" variant="outlined" value={item.amount}/>
                <TextField id="metric" label="Metric" variant="outlined" value={item.metric}/>
                <TextField id="ingredient" label="Ingredient" variant="outlined" value={item.ingredient}/>
            <Button variant="contained" onClick={() =>{}}><ClearIcon/></Button>
        </div>
    )
}

export default IngredientItem;