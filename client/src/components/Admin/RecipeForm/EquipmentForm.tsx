import React, {useState}  from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';


const EquipmentForm = () => {
    const [equipments, setEquipments] = useState(Array.apply(null, {length: 3}).map(Number.call, Number));
    return (
        <div>
            <h1>Equipment Requirements</h1>
            {equipments.map((index) => 
                <div className="equipment-container" key = {index}>  
                    <TextField label="Equipment" variant="outlined"/>
                    <Button variant="contained" onClick={() => {}}><ClearIcon/></Button>
                </div>
            )}
            <Button variant="contained" onClick={() => {}}>Add Equipment</Button>
        </div>
    )
}

export default EquipmentForm;