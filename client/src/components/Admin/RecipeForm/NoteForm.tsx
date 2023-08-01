import React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

const NoteForm = ({}) => {
    const [notesInput, setNotesInput] = useState("")
    const [notes, setNotes] = useState(Array.apply(null, {length: 2}).map(Number.call, Number));
    return (
        <div>
            <h1> Notes </h1>
            {
                    notes.map((note, index) => 
                        <div className="description-container">
                            <TextField 
                                multiline 
                                label="Note" 
                                variant="outlined" 
                                fullWidth
                                value={notesInput.toString()}/>
                                <Button variant="contained" onClick={() =>{}} ><ClearIcon/></Button>
                        </div>
                )}
                    
                <Button variant="contained">Add</Button>
        </div>
        
    )
}

export default NoteForm;
