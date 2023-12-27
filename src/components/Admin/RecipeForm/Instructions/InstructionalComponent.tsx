import React, { useEffect, useState } from "react";
import InstructionItem from "./InstructionItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Box, Paper, TextField, Button } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

interface InstructionalComponentProps {
    updateComponent: Function;
    removeComponent: Function;
    key: number;
    index: number;
    instructionalComponent: {
        component_name: string;
        instructions: Array<InstructionProps>
    }
}

interface InstructionProps {
    id: string;
    description: string;
    image: string;
    step_id: number | null;
}

const InstructionalComponent = ({updateComponent, removeComponent, instructionalComponent, index} :InstructionalComponentProps) => {
    const [componentName, setComponentName] = useState(instructionalComponent.component_name || "")
    const [instructions, setInstructions] = useState(instructionalComponent.instructions);

    useEffect(() => {
        updateComponent({
            componentName,
            instructions
        }, index);
    }, [componentName, instructions]);

    const handleComponentNameInput = (value: string) => {
        setComponentName(value);
    }

    const addNewInstruction = () => {
        setInstructions([...instructions, {id: instructions.length - 1 + "", description: "", image: "", step_id: instructions.length - 1}]);
    }

    const removeInstruction = (index: number) => {
        const updatedComponents = instructions.filter((_, idx) => idx !== index);
        setInstructions(updatedComponents);
    }

    const updateInstructions = (updatedInstruction: InstructionProps, index: number) => {
        let updatedInstructions = instructions.map((instruction, idx) => {
            if (index === idx) {
                return {
                    ...instruction,
                    image: updatedInstruction.image,
                    description: updatedInstruction.description
                };
            }
            return instruction;
        })
        setInstructions(updatedInstructions);
    }

    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        const newItems = Array.from(instructions);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setInstructions(newItems);
    };

    return (
        <Box>
            <Paper elevation={2} style={{padding: 10}} >
                <TextField fullWidth 
                    label="Component Name"
                    variant="filled"
                    value={componentName}
                    onChange={(e) => handleComponentNameInput(e.target.value)}
                />

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                instructions.map((instruction, index) => (
                                    <Draggable key={instruction.id} draggableId={instruction.id + ""} index={index}>
                                        {(provided, snapshot) => (
                                            <InstructionItem 
                                                provided={provided}
                                                snapshot={snapshot}
                                                index={index}
                                                key={instruction.id}
                                                instruction={instruction}
                                                removeInstruction={removeInstruction}
                                                updateInstructions={updateInstructions}
                                            />
                                        )}
                                    </Draggable>
                                ))
                            }
                        </div>
                        )}
                    </Droppable>
                </DragDropContext>

                <div className="ingredient-section-buttons">
                    <Button variant="contained" onClick={() => addNewInstruction()}><Add/></Button>
                    <Button variant="contained" color="error" onClick={() => removeComponent(index)}><Delete/></Button>
                </div>
            </Paper>    
            <br/>
        </Box>
    )
}
export default InstructionalComponent;
