import React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const InstructionForm = ({setRecipeIngredientsOnForm}) => {
    const [instructionInput, setinstructionInput] = useState("")
    const [instructions, setInstructions] = useState(Array.apply(null, {length: 5}).map(Number.call, Number));
    
    return (
        <div>
                <h1> Instructions </h1>
                <div>
                {
                    instructions.map((instruction, index) => 
                        <TextField 
                        multiline rows={4} 
                        label="Description" 
                        variant="outlined" 
                        fullWidth
                        value={instructionInput.toString()}/>
                )}
                    
                <Button variant="contained">Add Instruction</Button>
            </div>
        </div>
    )
}

export default InstructionForm;
