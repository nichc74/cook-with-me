import React, {useState} from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import ReorderIcon from '@mui/icons-material/Reorder';

const IngredientItem = ({ provided, snapshot, item, deleteIngredient}) => {
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
        <Box className="ingredients-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Paper elevation={3} style={{width: "fit-content", display: "flex", padding: 10, justifyContent: "left", background: "white"}} >
                <TextField id="amount" size="small" type="number" label="Amount" variant="outlined" value={ingredientAmount} onChange={handleIngredientAmountInput}/>
                <TextField id="metric" size="small" label="Metric" variant="outlined" value={ingredientMetric} onChange={handleIngredientMetricInput}/>
                <TextField id="ingredient" size="small" label="Ingredient" variant="outlined" value={ingredientName} onChange={handleIngredientNameInput}/>
                <Button color="error" variant="contained" onClick={() =>{deleteIngredient(item.id)}}><RemoveIcon/></Button>
                <ReorderIcon style={{height: "100%", paddingLeft: 10}}/>
            </Paper>
        </Box>
    )
}

export default IngredientItem;