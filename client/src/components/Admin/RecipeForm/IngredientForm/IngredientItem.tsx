import React, {useState} from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import ReorderIcon from '@mui/icons-material/Reorder';

const IngredientItem = ({ provided, snapshot, item, deleteIngredient, updateIngredient }) => {
    const [ingredientAmount, setIngredientAmount] = useState(0);
    const [ingredientMetric, setIngredientMetric] = useState("");
    const [ingredientName, setIngredientName] = useState("");

    const handleInputChange = (type, value) => {
        switch (type) {
            case 'amount':
                setIngredientAmount(value);
                updateData(value, ingredientMetric, ingredientName);
                break;
            case 'metric':
                setIngredientMetric(value);
                updateData(ingredientAmount, value, ingredientName);
                break;
            case 'ingredient':
                setIngredientName(value);
                updateData(ingredientAmount, ingredientMetric, value);
                break;
            default:
                break;
        }
    };

    const updateData = (newAmount: number, newMetric: string, newName: string) => {
        const data = { 
            amount: newAmount,
            metric: newMetric,
            ingredient: newName
        };
        updateIngredient(item.id, data);
    };

    return (
        <Box className="ingredients-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Paper elevation={3} style={{width: "fit-content", display: "flex", padding: 10, justifyContent: "left", background: "white"}} >
                <TextField id="amount" size="small" type="number" label="Amount" variant="outlined" value={ingredientAmount} onChange={(e) => handleInputChange('amount', e.target.value)} />
                <TextField id="metric" size="small" label="Metric" variant="outlined" value={ingredientMetric} onChange={(e) => handleInputChange('metric', e.target.value)} />
                <TextField id="ingredient" size="small" label="Ingredient" variant="outlined" value={ingredientName} onChange={(e) => handleInputChange('ingredient', e.target.value)} />
                <Button color="error" variant="contained" onClick={() => deleteIngredient(item.id)}><RemoveIcon/></Button>
                <ReorderIcon style={{height: "100%", paddingLeft: 10}}/>
            </Paper>
        </Box>
    );
};

export default IngredientItem;