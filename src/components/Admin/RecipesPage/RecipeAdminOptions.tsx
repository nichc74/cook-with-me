import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateRecipeStatus } from '../../../apis/AdminAPI/RecipeAPI.js'

interface RecipeObjectProp {
    id: number;
    image: string,
    title: string,
    status: string,
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
        <div style={{padding: 10}}>
            {
                recipeStatus === "published" ? 
                <Button color="success" size="small" onClick={() => publishingOnClick("unpublished")}>Unpublish</Button>
                :
                <Button color="success" size="small" onClick={() => publishingOnClick("published")}>Publish</Button>
            }
            <Button size="small" onClick={onClickEdit}>Edit</Button>
            <Button color="error" size="small" onClick={() => publishingOnClick("archived")}>Archive</Button>
        </div>
        
    );
}
export default RecipeCard;