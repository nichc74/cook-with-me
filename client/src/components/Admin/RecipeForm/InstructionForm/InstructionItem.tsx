import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import ReorderIcon from '@mui/icons-material/Reorder';
import ImageUpload from '../../../Basics/ImageUploader/ImageUpload.tsx';
import ImageIcon from '@mui/icons-material/Image';
import Add from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

import './instruction.css'

const InstructionItem = ({ provided, snapshot, item, deleteInstruction, updateInstruction }) => {
    const [instructionInput, setInstructionInput] = useState('');
    const [instructionImage, setInstructionImage] = useState('')
    const inputRef = useRef(null);
    
    const handleInstructionInput = (value: string) => {
        setInstructionInput(value);
        updateInstructionEntry(value);
    };

    const updateInstructionEntry = (value: string) => {
        var data = {
            description: value,
            is_image: false
        }
        updateInstruction(item.id, data)
    }

    const handleInstuctionUploadClick = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setInstructionImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        console.log("path: " + file.name);
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
