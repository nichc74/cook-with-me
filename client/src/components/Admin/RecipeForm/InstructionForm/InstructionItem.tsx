import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

const InstructionItem = ({ provided, snapshot, item })=> {
    const [instructionInput, setinstructionInput] = useState("");

    const handleInstructionInput = (e) => {
        setinstructionInput(e.target.value)
    }

    return (
        <div className="description-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
                <TextField 
                    multiline
                    label="Instruction" 
                    variant="outlined" 
                    fullWidth
                    value={item.content} onChange={handleInstructionInput}
                />
            <Button variant="contained" onClick={() =>{}}><ClearIcon/></Button>
        </div>
    )
}

export default InstructionItem;