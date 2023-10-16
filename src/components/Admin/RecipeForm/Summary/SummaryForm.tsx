import React, { useEffect, useState } from "react";
import { Box, Paper, TextField } from "@mui/material";
import { updateSummary } from '../../../../store/actions/recipeActions.js';
import { useDispatch } from 'react-redux';

interface SummaryProps {
    recipeSummary: {
        id: number,
        summary: string
    }
}

const SummaryForm = ({recipeSummary}: SummaryProps) => {
    const [summary, setSummary] = useState(recipeSummary.summary || "");
    const dispatch = useDispatch();

    useEffect(() => {
        let summaryData = {
            id: recipeSummary.id,
            summary: summary
        }
        dispatch(updateSummary(summaryData));
    }, [recipeSummary, summary])

    const handleSummaryChange = (value: string) => {
        setSummary(value);
    }

    return (
        <div>
            <h1>Summary</h1>
            <Box>   
                <Paper elevation={3} style={{display: "flex", padding: 10, background: "white"}}>
                    <TextField
                        fullWidth
                        label="Recipe Summary"
                        multiline
                        value={summary}
                        onChange={(e) => handleSummaryChange(e.target.value)}
                    />
                </Paper>
            </Box>
        </div>
    )
}

export default SummaryForm;