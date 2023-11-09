import React from "react";
import PresetItem from "./PresetItem";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";


const PresetList = ({presets} : any) => {
    console.log(presets);
    return (
        <TableContainer>
            {/* <TextField/> */}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Options</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {
                    presets.map((preset: any, index: number) => (
                        <PresetItem key={preset.id}index={preset.id} preset={preset} />
                    ))
                }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PresetList;