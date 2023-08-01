import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import ReorderIcon from '@mui/icons-material/Reorder';

const NoteItem = ({ provided, snapshot, item, deleteNotes })=> {
    const [instructionInput, setinstructionInput] = useState("");

    const handleInstructionInput = (e) => {
        setinstructionInput(e.target.value)
    }

    return (
        <Box className="description-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
                <Paper elevation={3} style={{width: "100%", display: "flex", padding: 10, background: "white"}}>
                    <TextField 
                        multiline
                        size="small"
                        label="Note" 
                        variant="outlined" 
                        fullWidth
                        value={item.content} onChange={handleInstructionInput}
                    />
                    <Button variant="contained" onClick={() =>{deleteNotes(item.id)}}><ClearIcon/></Button>
                    <ReorderIcon style={{height: "100%", paddingLeft: 10}}/>
                </Paper>
                
        </Box>
    )
}

export default NoteItem;