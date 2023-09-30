import React, { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import {updateRecipeNotes} from  '../../../../store/actions/recipeActions.js';
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

interface NoteItemProps {
    stepId: string,
    description: string
}

interface RecipeNotesProps {
    recipeNotes: Array<NoteItemProps>
}

const NoteForm = ({recipeNotes}: RecipeNotesProps) => {
    const dispatch = useDispatch();

    const [notes, setNotes] = useState([{}, {}, {}, {}, {}])

    useEffect(() => {
        if (recipeNotes) {
            setNotes(recipeNotes);
        }
        dispatch(updateRecipeNotes(notes));
    }, [recipeNotes, notes])

    const addNewNote = () => {
        setNotes([...notes, {}]);
    }

    const removeNote = (index: Number) => {
        const updatedComponents = notes.filter((_, idx) => idx !== index);
        setNotes(updatedComponents);
    }


    const updateNotes = (updatedNote: NoteItemProps, index: number) => {
        let updatedNotes = notes.map((note, idx) => {
            if (index === idx) {
                return {
                    ...note,
                    description: updatedNote.description,
                    stepId: updatedNote.index + 1
                };
            }
            return note;
        })
        setNotes(updatedNotes);
    }

    return (
        <div>
            <h1> Notes </h1>
            {
                notes.map((note, index) => (
                    <NoteItem
                        removeNote={removeNote}
                        index={index}
                        key={index} 
                        note={note}   
                        updateNotes={updateNotes}
                    />
                ))
            }
            <br/>
            <Button fullWidth variant="contained" onClick={() => addNewNote()}>Add Note</Button>
        </div>
    )
}

export default NoteForm;
