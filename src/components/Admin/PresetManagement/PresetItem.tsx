import React, { useState } from 'react';
import './Preset.css';
import { Button, TableCell, TableRow } from '@mui/material';
import EditingPresetModal from '../../Basics/Modals/EditingPresetModal';
import ConfirmationModal from '../../Basics/Modals/ConfirmationModal';

const PresetItem = ({ preset, index }: any) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const onEdit = () => {
    console.log("Edit");
    setIsEditModalOpen(true);
  };

  const cancelEdit = () => {
    setIsEditModalOpen(false);
  };

  const onDelete = () => {
    console.log("Delete");
    setIsDeleteModalOpen(true);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>{preset.name}</TableCell>
      <TableCell>
        <Button onClick={onEdit}> Edit </Button>
        <Button color="error" onClick={onDelete}> Delete </Button>
        {isEditModalOpen && 
            <EditingPresetModal
                isOpen={true} 
                cancelEdit={cancelEdit} 
                presetName={preset.name}
            />}
        {isDeleteModalOpen && 
            <ConfirmationModal
                isOpen={true} 
                cancelDelete={cancelDelete} 
                presetName={preset.name}
            />}
      </TableCell>
    </TableRow>
  );
};

export default PresetItem;