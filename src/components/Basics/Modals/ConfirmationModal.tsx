import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmationModal = ({isOpen, cancelDelete, presetName}: any) => {
    const [open, setOpen] = useState(isOpen);
    
    const handleClose = () => {
        setOpen(false);
        cancelDelete(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Are you sure you want to delete this preset?</DialogTitle>
            <DialogContent>
                <b>{presetName}</b>
            </DialogContent>
            <DialogActions>
                <Button color="error"onClick={handleClose}>Delete</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationModal;