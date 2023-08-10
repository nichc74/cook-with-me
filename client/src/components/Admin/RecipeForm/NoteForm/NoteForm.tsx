import React from 'react';
import {useState} from 'react';
import { Button, Paper} from '@mui/material';
import NoteItem from './NoteItem.tsx';
import { useDispatch } from 'react-redux';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { updateNotes } from '../../../../store/actions/recipeActions.js';


const NoteForm = () => {
    const dispatch = useDispatch();
    const [notes, setNotes] = useState(Array(2).fill({}).map((_, i) => ({ id: i + "", description: "", is_image: false })));

    const onDragEnd = (result: any) => {
        const newItems = Array.from(notes);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setNotes(newItems);
        dispatch(updateNotes(newItems))
    };

    const deleteNotes = (idToDelete: string) => {
        const updatedNotes = notes.filter(component => component.id !== idToDelete);
        setNotes(updatedNotes);
        dispatch(updateNotes(updatedNotes))
    }

    const addNote = () => {
        setNotes([...notes, {id: notes.length + "", data: {}}]);
    }

    const updateRecipeNotes = (idToUpdate: string, updateNoteData: any) => {
        console.log(updateNoteData)
        const updatedNotes = notes.map(note => {
            if (note.id === idToUpdate) {
                return {
                    ...note,
                    description: updateNoteData.description,
                    is_image: updateNoteData.is_image
                };
            }
            return note;
        });

        setNotes(updatedNotes);
        dispatch(updateNotes(updatedNotes));
    };

    return (
        <div>
            <h1> Notes </h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {notes.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                <NoteItem
                                    provided={provided}
                                    snapshot={snapshot}
                                    item={item}
                                    deleteNotes={deleteNotes}
                                    updateRecipeNotes={updateRecipeNotes}
                                />
                                )}
                            </Draggable>
                        ))}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
            <Button style={{width: "100%"}} variant="contained" onClick={() => addNote()}>Add Note</Button>
        </div>
    );
}

export default NoteForm;
