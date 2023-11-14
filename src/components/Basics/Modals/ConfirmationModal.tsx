import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {deletePreset} from '../../../apis/AdminAPI/PresetAPI.js';

const ConfirmationModal = ({isOpen, cancelDelete, preset, presetType, removeElement, successfulRemoval}: any) => {
    const [open, setOpen] = useState(isOpen);
    
    const handleClose = () => {
        setOpen(false);
        cancelDelete(false);
    };

    const deleteAndRemovePreset = async () => {
        const response = await deletePreset(presetType, preset.id);
        
        if (response.message == "Sucess" || response) {
            removeElement(presetType, preset.id);
            successfulRemoval("Successfully Removed Element", true);
        }
        else {
            successfulRemoval(response.message, false);
        }
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Permanently delete Preset? 
                    <br/>
                    <br/>
                    <b>{preset.name}</b>

                    <p style={{color: "red"}}>This will affect all recipes that use this item, including published recipes.</p>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="error"onClick={deleteAndRemovePreset}>Delete</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationModal;