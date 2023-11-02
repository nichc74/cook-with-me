import { Image, Add, Remove } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import './Instruction.css';

interface InstructionItemProps {
    index: number,
    instruction: {
        description: string,
        image: string
    }
    removeInstruction: Function,
    updateInstructions: Function
}

const InstructionItem = ({removeInstruction, updateInstructions, instruction, index} : InstructionItemProps) => {
    const [image, setImage] = useState(instruction.image || "");
    const [description, setDescription] = useState(instruction.description || "");
    
    useEffect(() => {
        updateInstructions({
            image, 
            description,
            index
        }, index)
    }, [image, description]);

    const handleImageUpload = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImage('');
    }


    return(
        <Box>
            <Paper elevation={3} style={{display: 'flex', padding: 10, background: 'white', flexDirection: "column", marginBottom: 10}}>
                    { image && 
                        <Button className="remove-image" onClick={removeImage}>
                            <Tooltip title="Delete">
                                <img className="image-button" src={image}/>
                            </Tooltip>
                        </Button>
                    }
                    <div style={{marginLeft: "auto", flexDirection: "row"}}>
                        <label>
                            <Button variant="contained" component="span">
                                <Image/><Add/>
                                <input
                                    accept="image/*"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                            </Button>
                        </label>                    
                    </div>
                    <br/>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                        <TextField
                            multiline
                            size="small"
                            label="Instruction"
                            variant="outlined"
                            fullWidth
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                        <Button color="error" style={{marginLeft: "auto"}} variant="contained" onClick={() => {removeInstruction(index)}}>
                            <Remove/>
                        </Button>
                    </div>
                    <br/>
            </Paper>
        </Box>
    )
}
export default InstructionItem;