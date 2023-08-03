import React from 'react';
import {useState} from 'react';
import { Button, Paper} from '@mui/material';
import InstructionItem from './InstructionItem.tsx';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"


const InstructionForm = ({setRecipeIngredientsOnForm}) => {
    const [instructions, setInstructions] = useState(Array(5).fill({}).map((_, i) => ({ id: i + "" })));

    const onDragEnd = (result: any) => {
        const newItems = Array.from(instructions);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setInstructions(newItems);
    };

    const deleteInstruction = (id: string) => {
        const temp = [...instructions];

        for (var inIdx = 0; inIdx < instructions.length; inIdx++) {
            if (instructions[inIdx].id == id) {
                temp.splice(inIdx, 1);
                break;
            }
        }
        setInstructions(temp);
    }

    const addInstruction = () => {
        setInstructions([...instructions, {id: instructions.length + ""}]);
    }

    return (
        <div>
            <h1> Instructions </h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {instructions.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                <InstructionItem
                                    provided={provided}
                                    snapshot={snapshot}
                                    item={item}
                                    deleteInstruction={deleteInstruction}
                                />
                                )}
                            </Draggable>
                        ))}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
            <Button style={{width: "100%"}} variant="contained" onClick={() => addInstruction()}>Add Instruction</Button>
        </div>
    );
}

export default InstructionForm;
