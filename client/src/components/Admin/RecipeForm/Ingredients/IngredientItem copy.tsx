import React, {useEffect, useState} from 'react';
import { TextField, Button, Box, Paper, Autocomplete } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import ReorderIcon from '@mui/icons-material/Reorder';



const IngredientItem = ({ provided, snapshot, item, deleteIngredient, updateIngredient, presets }) => {
    const [ingredientAmount, setIngredientAmount] = useState(item.amount|| null);
    const [ingredientMetric, setIngredientMetric] = useState(item.metric || "");
    const [ingredientName, setIngredientName] = useState(item.name || "");

    useEffect(() => {
        if (item.amount){
            setIngredientAmount(item.amount);
        } 
        if (item.metric) {
            setIngredientMetric(item.metric);
        }
        if (item.name) {
            setIngredientName(item.name);
        }
    }, [])

    const handleInputChange = (type: string, event: any) => {
        let value = event.target.textContent;

        switch (type) {
            case 'amount':
                value = event.target.value
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
        let data = { 
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
                <TextField id="amount" sx={{ width: '100%' }} fullWidth type="number" label="Amount" variant="outlined" value={ingredientAmount} onChange={(e) => handleInputChange('amount', e)} />
                <Autocomplete
                    options={presets.metrics}
                    sx={{ width: '100%' }}
                    value={ingredientMetric}
                    inputValue={ingredientMetric}
                    onInputChange={(e) => {handleInputChange('metric', e)}}
                    freeSolo
                    renderInput={(params) => <TextField {...params} id="metric" fullWidth label="Metric" variant="outlined"/>}
                />
                <Autocomplete
                    options={presets.ingredients}
                    sx={{ width: '100%' }}
                    value={ingredientName}
                    inputValue={ingredientName}
                    onInputChange={(e) => handleInputChange('ingredient', e)}
                    freeSolo
                    renderInput={(params) => <TextField {...params} id="ingredient" fullWidth label="Ingredient" variant="outlined" />
                }
                />
                <Button color="error" variant="contained" onClick={() => deleteIngredient(item.id)}><RemoveIcon/></Button>
                <ReorderIcon style={{height: "100%", paddingLeft: 10}}/>
            </Paper>
        </Box>
    );
};

export default IngredientItem;