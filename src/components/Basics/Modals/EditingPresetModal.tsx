import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditingPresetModal = ({isOpen, cancelEdit, presetName}: any) => {
    const [open, setOpen] = useState(isOpen);
    
    const handleClose = () => {
        setOpen(false);
        cancelEdit(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editing Preset</DialogTitle>
            <DialogContent>
                <TextField sx={{width: 350}} value={presetName}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Submit</Button>
                <Button color="error" onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditingPresetModal;