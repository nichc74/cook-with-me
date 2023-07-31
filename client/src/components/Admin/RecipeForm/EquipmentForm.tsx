import React, {useState}  from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EquipmentForm = () => {
    const [equipments, setEquipments] = useState(Array.apply(null, {length: 3}).map(Number.call, Number));
    return (
        <div>
            <h1>Equipment Requirements</h1>
            {equipments.map((index) => 
                <div className="ingredients-section" key = {index}>  
                    <TextField label="Equipment" variant="outlined"/>
                    <Button variant="contained" onClick={() => {}} > X </Button>
                </div>
            )}
            <Button variant="contained" onClick={() => {}}>Add New Ingredient</Button>
        </div>
    )
}

export default EquipmentForm;