import React, { useEffect, useState } from "react";
import InstructionItem from "./InstructionItem";
import { Box, Paper, TextField, Button } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

interface InstructionalComponentProps {
    updateComponent: Function,
    removeComponent: Function,
    key: number,
    index: number,
    instructionalComponent: {
        component_name: string,
        instructions: Array<InstructionProps>
    }
}

interface InstructionProps {
    id: string
    description: string;
    image: string,
}

const InstructionalComponent = ({updateComponent, removeComponent, instructionalComponent, index}:InstructionalComponentProps) => {
    const [componentName, setComponentName] = useState(instructionalComponent.component_name || "")
    const [instructions, setInstructions] = useState(instructionalComponent.instructions || new Array(3).fill({description: "", image: ""}));

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
        setInstructions([...instructions, {id: "", description: "", image: ""}]);
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
                    description: updatedInstruction.description,
                    stepId: updatedInstruction.index + 1
                };
            }
            return instruction;
        })
        setInstructions(updatedInstructions);
    }

    return (
        <Box>
            <Paper elevation={2} style={{padding: 10}} >
                <TextField fullWidth 
                    label="Component Name"
                    variant="filled"
                    value={componentName}
                    onChange={(e) => handleComponentNameInput(e.target.value)}
                />
                {
                    instructions.map((instruction, index) => (
                        <InstructionItem
                            key={instruction.id || index}
                            index={index}
                            instruction={instruction}
                            removeInstruction={removeInstruction}
                            updateInstructions={updateInstructions}
                        />
                    ))
                }
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
