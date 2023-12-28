import React, { useState } from 'react';
import './Preset.css';
import { Alert, Button, Snackbar, TableCell, TableRow } from '@mui/material';
import EditingPresetModal from '../../Basics/Modals/EditingPresetModal';
import ConfirmationModal from '../../Basics/Modals/ConfirmationModal';

interface PresetItenProps {
    preset: {
        id: number,
        name: string,
        image: string
    };
    presetType: string;
    removeElement: Function;
}

const PresetItem = ({ preset, presetType, removeElement}: PresetItenProps) => {
    const [presetName, setPresetName] = useState(preset.name);
    const [presetImage, setPresetImage] = useState(preset.image);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [successful, setSuccessful] = useState(true);

    const onEdit = () => {
        setIsEditModalOpen(true);
    };

    const cancelEdit = () => {
        setIsEditModalOpen(false);
    };

    const onDelete = () => {
        setIsDeleteModalOpen(true);
    };

    const successfulRemoval = (message: string, isSuccessful: boolean) => {
        setOpenSnackbar(true);
        setSnackbarMessage(message);
        setSuccessful(isSuccessful)
    }

    const cancelDelete = () => {
        setIsDeleteModalOpen(false);
    };

    const setNewPresetName = (value: string) => {
        setPresetName(value);
        setOpenSnackbar(true);
        setSnackbarMessage("Success");
        setSuccessful(true);
    }

    const setNewPresetImage = (value: string) => {
        setPresetImage(value);
        setOpenSnackbar(true);
        setSnackbarMessage("Success");
        setSuccessful(true);
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };


  return (
        <TableRow>
            <TableCell>{preset.id}</TableCell>
            <TableCell>
                { 
                    presetImage &&
                    <img style={{width: 100, height: 100, objectFit: "cover"}} src={presetImage}/> 
                    
                }
            </TableCell>
            <TableCell>{presetName}</TableCell>
            <TableCell>
                <Button onClick={onEdit}> Edit </Button>
                <Button color="error" onClick={onDelete}> Delete </Button>
                
                {isEditModalOpen && 
                    <EditingPresetModal
                        isOpen={true} 
                        presetType={presetType}
                        cancelEdit={cancelEdit} 
                        preset={preset}
                        presetImage={preset.image}
                        presetName={presetName}
                        setNewPresetName={setNewPresetName}
                        setNewPresetImage={setNewPresetImage}
                    />
                }
                
                {isDeleteModalOpen && 
                    <ConfirmationModal
                        removeElement={removeElement}
                        isOpen={true} 
                        presetType={presetType}
                        cancelDelete={cancelDelete} 
                        preset={preset}
                        successfulRemoval={successfulRemoval}
                    />
                }
            </TableCell>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}>
                <Alert 
                    severity={successful ? "success" : "error"}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </TableRow>
  );
};

export default PresetItem;