import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import ReorderIcon from '@mui/icons-material/Reorder';
import ImageUpload from '../../../Basics/ImageUploader/ImageUpload.tsx';
import ImageIcon from '@mui/icons-material/Image';
import Add from '@mui/icons-material/Add';

const InstructionItem = ({ provided, snapshot, item, deleteInstruction, updateInstruction }) => {
    const [instructionInput, setInstructionInput] = useState('');
    const [instructionImage, setInstructionImage] = useState('')

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

    const handleUploadClick = (e) => {
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

    return (
        <Box
            className="description-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Paper elevation={3} style={{ width: '100%', display: 'flex', padding: 10, background: 'white', flexDirection: "column"}}>
                    <ReorderIcon style={{padding: 10, marginLeft: 'auto' }} />
                    {/* <img src="https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/h_720,w_1280"/> */}
                    <img src={instructionImage}/>
                    
                    <TextField
                        multiline
                        size="small"
                        label="Instruction"
                        variant="outlined"
                        fullWidth
                        rows={4} 
                        value={instructionInput}
                        onChange={(e) => handleInstructionInput(e.target.value)}
                    />

                 <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-evenly"}}>
                    <label htmlFor="contained-button-file">
                        <Button style={{width: "100%"}} variant="contained" component="span">
                            <ImageIcon/><Add/>
                            <input
                                accept="image/*"
                                id="contained-button-file"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleUploadClick}
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
