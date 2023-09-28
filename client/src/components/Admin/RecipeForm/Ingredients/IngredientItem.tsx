import { Autocomplete, Box, Button, Paper, TextField } from "@mui/material";
import { Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

interface IngredientItemProps {
    removeIngredient: Function,
    updateIngredientList: Function,
    index: Number,
    key: Number,
    presets: {
        metrics: Array<string>,
        ingredients: Array<string>
    }
}

const IngredientItem = ( {updateIngredientList, removeIngredient, presets, index, key}: IngredientItemProps) => {
    const [amount, setAmount] = useState<number | null>(null);
    const [metric, setMetric] = useState<string | null>("");
    const [name, setName] = useState<string | null> ("");

    useEffect(() => {   
        updateIngredientList({
            amount, 
            metric, 
            name
        }, index)
    }, [amount, metric, name]);
    
    const deleteItem = () => {
        removeIngredient(index);
    }

    return (
        <Box className="ingredients-container">
            <Paper elevation={3} style={{width: "100%", display: "flex", padding: 10, justifyContent: "left", background: "white"}} >
                <TextField id="amount" sx={{ width: '100%' }} fullWidth type="number" label="Amount" variant="outlined"
                    value={amount === null ? "" : amount}
                    onChange={(e) => {
                        setAmount(Number(e.target.value))
                    }}
                />
                <Autocomplete
                    options={presets.metrics}
                    sx={{ width: '100%' }}
                    freeSolo
                    value={metric}
                    onChange={(event: any, newValue: string | null) => {
                        setMetric(newValue)
                    }}
                    onInputChange={(event: any, newValue: string | null) => {
                        setMetric(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} id="metric" fullWidth label="Metric" variant="outlined"/>}
                />
                <Autocomplete
                    options={presets.ingredients}
                    sx={{ width: '100%' }}
                    freeSolo
                    value={name}
                    onChange={(event: any, newValue: string | null) => {
                        setName(newValue)
                    }}
                    onInputChange={(event: any, newValue: string | null) => {
                        setName(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} id="ingredient" fullWidth label="Ingredient" variant="outlined" />
                }
                />
                <Button color="error" variant="contained" onClick={() => {deleteItem(index)}}><Remove/></Button>
            </Paper>
        </Box>
    )
}

export default IngredientItem;