import React, { useEffect, useState } from "react";
import RecipeAdminOptions from "./RecipeAdminOptions.tsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getAllRecipesInAdmin } from "../../../apis/AdminAPI/RecipeAPI.js";

const Recipes = ({}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => { // Make fetchRecipes async
        try {
          const fetchedRecipes = await getAllRecipesInAdmin();
          setRecipes(fetchedRecipes);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };

    return (
        <div style={{display: "block", flexWrap: "wrap", width:"100%"}}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell><b>Recipe</b></TableCell>
                        <TableCell align="left"><b>Status</b></TableCell>
                        <TableCell align="left"><b>Category</b></TableCell>
                        <TableCell align="left"><b>Date</b></TableCell>
                        <TableCell align="center"><b>Options</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recipes.map((recipe: any) => (
                    <TableRow
                        key={recipe.title}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            <img style={{width: 100, height: 100, objectFit: "cover"}} src={recipe.image}/>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {recipe.title}
                        </TableCell>
                    
                        <TableCell align="left">{recipe.status}</TableCell>
                        <TableCell align="left">{recipe.category}</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"><RecipeAdminOptions key={recipe.id} recipe={recipe} /></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
export default Recipes;