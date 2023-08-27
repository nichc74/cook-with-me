import React, {useEffect, useState} from 'react';
import { TextField, Button, Box, Paper, Autocomplete } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import ReorderIcon from '@mui/icons-material/Reorder';

const IngredientItem = ({ provided, snapshot, item, deleteIngredient, updateIngredient, presets }) => {
    const [ingredientAmount, setIngredientAmount] = useState(0);
    const [ingredientMetric, setIngredientMetric] = useState("");
    const [ingredientName, setIngredientName] = useState("");

    const handleInputChange = (type: string, event: any) => {
        var value = event.target.value
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
            <Paper elevation={3} style={{width: "100%", display: "flex", padding: 10, justifyContent: "left", background: "white"}} >
                <TextField id="amount"  sx={{ width: '100%' }} fullWidth type="number" label="Amount" variant="outlined" value={ingredientAmount} onChange={(e) => handleInputChange('amount', e)} />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={presets.metrics}
                    sx={{ width: '100%' }}
                    onInputChange={(e) => {handleInputChange('metric', e)}}
                    freeSolo
                    renderInput={(params) => <TextField {...params}  id="metric" fullWidth label="Metric" variant="outlined" />}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={presets.ingredients}
                    sx={{ width: '100%' }}
                    freeSolo
                    onInputChange={(e) => handleInputChange('ingredient', e)}
                    renderInput={(params) => <TextField {...params} id="ingredient" fullWidth label="Ingredient" variant="outlined" value={ingredientName} />
                }
                />
                <Button color="error" variant="contained" onClick={() => deleteIngredient(item.id)}><RemoveIcon/></Button>
                <ReorderIcon style={{height: "100%", paddingLeft: 10}}/>
            </Paper>
        </Box>
    );
};

export default IngredientItem;