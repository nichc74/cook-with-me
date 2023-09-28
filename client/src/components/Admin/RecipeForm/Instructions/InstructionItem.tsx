import { Image, Add, Remove } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import './Instruction.css';

interface InstructionItemProps {
    key: Number,
    index: Number,
    removeInstruction: Function,
    updateInstructions: Function
}

const InstructionItem = ({removeInstruction, updateInstructions, key, index} : InstructionItemProps) => {
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    
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
                    <br/>
                    <TextField
                        multiline
                        size="small"
                        label="Instruction"
                        variant="outlined"
                        fullWidth
                        rows={3} 
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                    <br/>
                 <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-evenly"}}>
                    <label>
                        <Button style={{width: "100%"}} variant="contained" component="span">
                            <Image/><Add/>
                            <input
                                accept="image/*"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleImageUpload}
                            />
                        </Button>
                    </label>
                    <Button color="error" style={{marginLeft: "auto"}} variant="contained" onClick={() => {removeInstruction(index)}}>
                        <Remove/>
                    </Button>
                    
                </div>
            </Paper>
        </Box>
    )
}
export default InstructionItem;