import { Autocomplete, Box, Button, Paper, TextField } from "@mui/material";
import { Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

interface IngredientItemProps {
    removeIngredient: Function,
    updateIngredientList: Function,
    index: Number,
    metricPresets: Array<string>,
    ingredientPresets: Array<string>,
    ingredient: {
        id: number | null,
        amount: string,
        metric: string,
        name: string
    }
}

const IngredientItem = ( {updateIngredientList, removeIngredient, ingredient, metricPresets, ingredientPresets, index}: IngredientItemProps) => {
    const [id, setId] = useState<number | null>(ingredient.id || null );
    const [amount, setAmount] = useState<string | null>(ingredient.amount || "");
    const [metric, setMetric] = useState<string | null>(ingredient.metric || "");
    const [name, setName] = useState<string | null> (ingredient.name || "");

    useEffect(() => {   
        updateIngredientList({
            id,
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
                <TextField id="amount" sx={{ width: '100%' }} fullWidth label="Amount" variant="outlined"
                    value={amount === null ? "" : amount}
                    onChange={(e) => {
                        setAmount(e.target.value)
                    }}
                />
                <Autocomplete
                    options={metricPresets}
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
                    options={ingredientPresets}
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
                <Button color="error" variant="contained" onClick={deleteItem}><Remove/></Button>
            </Paper>
        </Box>
    )
}

export default IngredientItem;