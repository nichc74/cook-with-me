import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import ReorderIcon from '@mui/icons-material/Reorder';

// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
// 	background: isDragging ? "#4a2975" : "white",
// 	color: isDragging ? "white" : "black",
// 	borderRadius: `5px`,
// 	...draggableStyle,
// })


const InstructionItem = ({ provided, snapshot, item, deleteInstruction})=> {
    const [instructionInput, setinstructionInput] = useState("");

    const handleInstructionInput = (e) => {
        setinstructionInput(e.target.value)
    }

    return (
        <Box className="description-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            // style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
            >
                <Paper elevation={3} style={{width: "100%", display: "flex", padding: 10, background: "white"}}>
                    <TextField 
                        multiline
                        size="small"
                        label="Instruction" 
                        variant="outlined" 
                        fullWidth
                        value={instructionInput} onChange={handleInstructionInput}
                    />
                    <Button color="error" variant="contained" onClick={() =>{deleteInstruction(item.id)}}><ClearIcon/></Button>
                    <ReorderIcon style={{height: "100%", paddingLeft: 10}}/>
                </Paper>
        </Box>
    )
}

export default InstructionItem;