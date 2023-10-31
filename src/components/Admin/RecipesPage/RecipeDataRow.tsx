import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateRecipeStatus } from '../../../apis/AdminAPI/RecipeAPI.js'
import { TableCell, TableRow } from '@mui/material';

interface RecipeObjectProp {
    id: number;
    image: string,
    title: string,
    status: string,
    category: string
}

interface RecipeCardProps {
    recipe: RecipeObjectProp,

}

const RecipeCard = ({recipe}: RecipeCardProps) => {
    const [recipeStatus, setRecipeStatus] = useState(recipe.status);
    const navigate = useNavigate();

    const publishingOnClick = async (status: string) => {
        const result = await updateRecipeStatus(recipe.id, status);
        if (result.status == 200) {
            setRecipeStatus(status);
        }
    }

    const onClickEdit = () => {
        navigate(`/admin/recipe-form/edit/${recipe.id}`, { state: recipe });
    }

    return (
        <TableRow
            key={recipe.title}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

            <TableCell>{recipe.id}</TableCell>
            <TableCell component="th" scope="row">
                <img style={{width: 100, height: 100, objectFit: "cover"}} src={recipe.image}/>
            </TableCell>
            <TableCell component="th" scope="row">
                {recipe.title}
            </TableCell>
        
            <TableCell align="left">{recipeStatus}</TableCell>
            <TableCell align="left">{recipe.category}</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">
            <div style={{padding: 10, display: "flex", justifyContent: "space-evenly", overflowWrap: "normal", flexWrap: "wrap"}}>
                {
                    recipeStatus === "published" ? 
                    <Button color="success" size="small" onClick={() => publishingOnClick("unpublished")}>Unpublish</Button>
                    :
                    <Button color="success" size="small" onClick={() => publishingOnClick("published")}>Publish</Button>
                }
                <Button size="small" onClick={onClickEdit}>Edit</Button>
                <Button color="error" size="small" onClick={() => publishingOnClick("archived")}>Archive</Button>
            </div>
            </TableCell>
        </TableRow>
    );
}
export default RecipeCard;