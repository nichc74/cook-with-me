import React from 'react';
import {useState} from 'react';
import { Button, Paper} from '@mui/material';
import NoteItem from './NoteItem.tsx';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const elements = [
    { id: "1", content: "Note 1" },
    { id: "2", content: "Note 2" },
  ];

const NoteForm = ({}) => {
    const [notes, setNotes] = useState(Array(2).fill({}).map((_, i) => ({ id: i + "" })));
    // const [items, setItems] = useState(Array.apply(null, {length: 5}).map(Number.call, Number));
    // const [items, setItems] = useState(elements);

    const onDragEnd = (result: any) => {
        const newItems = Array.from(notes);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setNotes(newItems);
    };

    const deleteNotes = (id: string) => {
        const temp = [...notes];
        for (var inIdx = 0; inIdx < notes.length; inIdx++) {
            if (notes[inIdx].id == id) {
                temp.splice(inIdx, 1);
                break;
            }
        }
        setNotes(temp);
    }

    const addNote = () => {
        setNotes([...notes, {id: notes.length + 1 + ""}]);
    }

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
