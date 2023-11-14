import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {editPreset} from '../../../apis/AdminAPI/PresetAPI.js';
import { Alert, Snackbar } from "@mui/material";

const EditingPresetModal = ({isOpen, cancelEdit, preset, presetType, presetName, setNewPresetName}: any) => {
    const [open, setOpen] = useState(isOpen);
    const [rename, setRename] = useState(presetName);
    const [hasInputError, setHasInputError] = useState(false);

    const handleClose = () => {
        setOpen(false);
        cancelEdit(false);
    };

    const renameRoom = async () => {
        if (rename) {
            try {
                const result = await editPreset(presetType, preset.id, rename);
            
                if (result) {
                    console.log(result.name);
                    setNewPresetName(result.name);
                    handleClose();
                }
            } catch (error) {
              // Handle errors from the API call
              console.error("Error editing preset:", error);
              // You might want to set an error state or show an error message to the user
            }
        } else {
            setHasInputError(true);
        }
    }

    const setNewName = (event: any) => {
        const newValue = event.target.value;
        if (newValue) {
            setHasInputError(false)
        }
        setRename(newValue);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editing Preset</DialogTitle>
            <DialogContent>
                <TextField 
                    sx={{width: 350}}
                    value={rename}
                    onChange={setNewName} 
                    error={hasInputError}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={renameRoom}>Submit</Button>
                <Button color="error" onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditingPresetModal;