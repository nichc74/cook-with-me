import React from 'react';
import {useState} from 'react';
import { Button } from '@mui/material';
import InstructionItem from './InstructionItem.tsx';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const elements = [
    { id: "1", content: "one" },
    { id: "2", content: "two" },
    { id: "3", content: "three" },
    { id: "4", content: "four" }
  ];

const InstructionForm = ({setRecipeIngredientsOnForm}) => {
    // const [instructions, setInstructions] = useState(Array.apply(null, {length: 5}).map(Number.call, Number));
    // const [items, setItems] = useState(Array.apply(null, {length: 5}).map(Number.call, Number));
    const [items, setItems] = useState(elements);

    const onDragEnd = (result: any) => {
      const newItems = Array.from(items);
      const [removed] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, removed);
      setItems(newItems);
    };

    return (
        <div>
            <h1> Instructions </h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                <InstructionItem
                                    provided={provided}
                                    snapshot={snapshot}
                                    item={item}
                                />
                                )}
                            </Draggable>
                        ))}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>

            <Button variant="contained" onClick={() => {}}>Add</Button>
        </div>
    );
}

export default InstructionForm;
