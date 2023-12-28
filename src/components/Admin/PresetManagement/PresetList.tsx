import React from "react";
import PresetItem from "./PresetItem";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";

interface PresetListProps {
    presets: Array<PresetItem>;
    presetType: string;
    removeElement: Function;
}

interface PresetItem {
    id: number,
    name: string
}

const PresetList = ({presets, presetType, removeElement} : PresetListProps) => {
    return (
        <TableContainer>
            {/* <TextField/> */}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Options</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {
                    presets.map((preset: any, index: number) => (
                        <PresetItem 
                            removeElement={removeElement}
                            key={preset.id}
                            preset={preset} 
                            presetType={presetType} />
                    ))
                }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PresetList;