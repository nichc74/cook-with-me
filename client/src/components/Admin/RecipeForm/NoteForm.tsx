import React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NoteForm = ({}) => {
    const [notesInput, setNotesInput] = useState("")
    const [notes, setNotes] = useState(Array.apply(null, {length: 2}).map(Number.call, Number));
    return (
        <div>
            <h1> Notes </h1>
            {
                    notes.map((note, index) => 
                        <TextField 
                        multiline rows={4} 
                        label="Description" 
                        variant="outlined" 
                        fullWidth
                        value={notesInput.toString()}/>
                )}
                    
                <Button variant="contained">Add Notes</Button>
        </div>
        
    )
}

export default NoteForm;
