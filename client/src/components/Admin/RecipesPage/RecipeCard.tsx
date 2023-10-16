import * as React from 'react';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
    const [selected, setSelected] = useState(false);
    const [recipeStatus, setRecipeStatus] = useState(recipe.status);
    const navigate = useNavigate();

    const onClickSelected = () => {
        setSelected(!selected);
    }
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
            <Card sx={{ width: 250}} style={{ border: selected ? '5px solid #8080ff' : 'none', cursor: "pointer" }}>
                <CardHeader
                    title={recipe.title}/>
                <CardMedia
                    component="img"
                    alt="recipe image"
                    height="200"
                    image={recipe.image}
                    onClick={onClickSelected}
                />
                <CardContent>
                    <Typography style={{ overflow: "hidden", whiteSpace: "nowrap"}} >
                        {recipeStatus}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing style={{justifyContent:"center"}}>
                    {
                        recipeStatus === "published" ? 
                        <Button color="success" size="small" onClick={() => publishingOnClick("unpublished")}>Unpublish</Button>
                        :
                        <Button color="success" size="small" onClick={() => publishingOnClick("published")}>Publish</Button>
                    }
                    <Button size="small" onClick={onClickEdit}>Edit</Button>
                    <Button color="error" size="small" onClick={() => publishingOnClick("archived")}>Archive</Button>
                </CardActions>
            </Card>
        </div>
        
    );
}
export default RecipeCard;