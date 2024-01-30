import React, { useState, ChangeEvent } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Tooltip } from "@mui/material";
import { Image } from "@mui/icons-material";
import { editPreset } from '../../../apis/AdminAPI/PresetAPI.js';
import './EditingPresetModal.css';

interface Props {
    isOpen: boolean;
    cancelEdit: (value: boolean) => void;
    preset: any;
    presetType: string;
    presetName: string;
    presetImage: string;
    setNewPresetName: (value: string) => void;
    setNewPresetImage: (value: string) => void;
}

const EditingPresetModal: React.FC<Props> = ({ isOpen, cancelEdit, preset, presetType, presetName, presetImage, setNewPresetName, setNewPresetImage }) => {
    const [image, setImage] = useState<string>(presetImage);
    const [open, setOpen] = useState<boolean>(isOpen);
    const [rename, setRename] = useState<string>(presetName);
    const [hasInputError, setHasInputError] = useState<boolean>(false);

    // Handle closing the modal
    const handleClose = () => {
        setOpen(false);
        cancelEdit(false);
    };

    // Handle renaming of the preset
    const updatePreset = async () => {
        if (rename != presetName || image != presetImage ) {
            try {
                const result = await editPreset(presetType, preset.id, rename, image);
                setNewPresetName(result.name);
                setNewPresetImage(result.image);
                handleClose();
            } catch (error) {
                console.error("Error editing preset:", error);
            }
        } else {
            setHasInputError(true);
        }
    }

    const setNewName = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setHasInputError(!newValue);
        setRename(newValue);
    }

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImage('');
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editing Preset</DialogTitle>
            <DialogContent className="modal-content">
                {image && 
                    <div className="image-container">
                        <Button className="remove-image" onClick={removeImage}>
                            <Tooltip title="Delete">
                                <img className="image-button" src={image} alt="Uploaded preview" />
                            </Tooltip>
                        </Button>
                    </div>
                }
                { (presetType === "category" || presetType === "cuisine") &&
                    <div className="button-container">
                        <label>
                            <Button variant="contained" className="upload-button" component="span">
                                <Image />
                                <input
                                    accept="image/*"
                                    type="file"
                                    className="file-input"
                                    onChange={handleImageUpload}
                                />
                            </Button>
                        </label>
                    </div>
                }
                
                <div className="text-field-container">
                    <TextField 
                        className="text-field"
                        value={rename}
                        onChange={setNewName} 
                        error={hasInputError}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={updatePreset}>Submit</Button>
                <Button color="error" onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditingPresetModal;
