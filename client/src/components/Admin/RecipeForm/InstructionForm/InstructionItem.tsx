import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import ReorderIcon from '@mui/icons-material/Reorder';

const InstructionItem = ({ provided, snapshot, item, deleteInstruction, updateInstruction }) => {
    const [instructionInput, setInstructionInput] = useState('');

    const handleInstructionInput = (value: string) => {
        setInstructionInput(value);
        updateInstructionEntry(value);
    };

    const updateInstructionEntry = (value: string) => {
        var data = {
            description: value
        }
        updateInstruction(item.id, data)
    }

    return (
        <Box
            className="description-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
        >
            <Paper elevation={3} style={{ width: '100%', display: 'flex', padding: 10, background: 'white' }}>
                <TextField
                    multiline
                    size="small"
                    label="Instruction"
                    variant="outlined"
                    fullWidth
                    value={instructionInput}
                    onChange={(e) => handleInstructionInput(e.target.value)}
                />
                <Button color="error" variant="contained" onClick={() => deleteInstruction(item.id)}>
                    <RemoveIcon />
                </Button>
                <ReorderIcon style={{ height: '100%', paddingLeft: 10 }} />
            </Paper>
        </Box>
    );
};

export default InstructionItem;
