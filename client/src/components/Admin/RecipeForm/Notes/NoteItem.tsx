import React, { useEffect, useState } from "react";
import { Box, Paper, TextField, Button } from "@mui/material";
import { Remove } from "@mui/icons-material";

interface NoteItemProps {
    key: Number,
    index: Number,
    removeNote: Function
    updateNotes:Function
}

const NoteItem = ({key, index, removeNote, updateNotes}: NoteItemProps) => {
    const [description, setDescription] = useState("");

    useEffect(() => {
        updateNotes({
            description,
            index
        }, index)
    }, [description])

    return (
        <Box className="description-container">
            <Paper elevation={3} style={{width: "100%", display: "flex", padding: 10, background: "white"}}>
                <TextField 
                    multiline
                    size="small"
                    label="Note" 
                    variant="outlined" 
                    fullWidth
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                />
                <Button color="error" variant="contained" onClick={() => {removeNote(index)}}><Remove/></Button>
            </Paper>
        </Box>
    )
}
export default NoteItem;