import React, { useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import ReorderIcon from '@mui/icons-material/Reorder';
import ImageIcon from '@mui/icons-material/Image';
import Add from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

import './instruction.css'

const InstructionItem = ({ provided, snapshot, item, deleteInstruction, updateInstruction }) => {
    const [instructionInput, setInstructionInput] = useState(item.description || '');
    const [instructionImage, setInstructionImage] = useState(item.image || '');
    const inputRef = useRef(null);

    useEffect(() => {
        if (item.description) {
            setInstructionInput(item.description);
        }
        if (item.image) {
            setInstructionImage(item.image);
        }
    }, [item])
    
    const handleInstructionInput = (value: string) => {
        setInstructionInput(value);
        updateInstructionEntry(value);
    };

    const updateInstructionEntry = (value: string) => {
        let data = {
            description: value,
            image: instructionImage
        }
        updateInstruction(item.id, data)
    }

    const handleInstuctionUploadClick = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;
            setInstructionImage(reader.result);

            let data = {
                description: instructionInput,
                image: imageData
            }
            updateInstruction(item.id, data)
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setInstructionImage('');
        inputRef.current.value = null;
    }

    return (
        <Box
            className="description-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Paper elevation={3} style={{ width: '100%', display: 'flex', padding: 10, background: 'white', flexDirection: "column"}}>
                    <ReorderIcon style={{padding: 10, marginLeft: 'auto' }} />
                    {instructionImage && 
                        <Button className="remove-image" onClick={removeImage}>
                            <Tooltip title="Delete">
                                <img className="image-button" src={instructionImage}/>
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
                        value={instructionInput}
                        onChange={(e) => handleInstructionInput(e.target.value)}
                    />
                    <br/>
                 <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-evenly"}}>
                    <label>
                        <Button style={{width: "100%"}} variant="contained" component="span">
                            <ImageIcon/><Add/>
                            <input
                                ref={inputRef}
                                accept="image/*"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleInstuctionUploadClick}
                            />
                        </Button>
                    </label>
                    <Button color="error" style={{marginLeft: "auto"}} variant="contained" onClick={() => deleteInstruction(item.id)}>
                        <RemoveIcon/>
                    </Button>
                    
                </div>
        
              
            </Paper>
        </Box>
    );
};

export default InstructionItem;
