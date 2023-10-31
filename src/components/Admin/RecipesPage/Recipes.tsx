import React, { useEffect, useState } from "react";
import RecipeDataRow from "./RecipeDataRow.tsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getAllRecipesInAdmin } from "../../../apis/AdminAPI/RecipeAPI.js";

interface RecipesPageProps {
    recipes: Array<Object>
}

const Recipes = ({recipes}: RecipesPageProps) => {
    return (
        <div style={{display: "block", flexWrap: "wrap", width:"100%"}}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left"><b>ID</b></TableCell>
                        <TableCell/>
                        <TableCell><b>Recipe</b></TableCell>
                        <TableCell align="left"><b>Status</b></TableCell>
                        <TableCell align="left"><b>Category</b></TableCell>
                        <TableCell align="left"><b>Last Updated</b></TableCell>
                        <TableCell align="center"><b>Options</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recipes.map((recipe: any) => (
                        <RecipeDataRow key={recipe.id} recipe={recipe}/>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
export default Recipes;