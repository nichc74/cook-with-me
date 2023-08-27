import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import ReorderIcon from '@mui/icons-material/Reorder';

const NoteItem = ({ provided, snapshot, item, deleteNotes, updateRecipeNotes})=> {
    const [note, setNoteInput] = useState("");

    const handleNoteInput = (value: string) => {
        setNoteInput(value)
        updateNote(value);
    }

    const updateNote = (description: string) => {
        const data = { 
            description: description,
            // is_image: false
        };
        updateRecipeNotes(item.id, data);
    };
    

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
                        value={note} onChange={(e) => handleNoteInput(e.target.value)}
                    />
                    <Button color="error" variant="contained" onClick={() =>{deleteNotes(item.id)}}><RemoveIcon/></Button>
                    <ReorderIcon style={{height: "100%", paddingLeft: 10}}/>
                </Paper>
                
        </Box>
    )
}

export default NoteItem;