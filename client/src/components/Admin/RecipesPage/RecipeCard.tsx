import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeForm from '../RecipeForm/RecipeForm.tsx';

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
    const navigate = useNavigate();

    const onClickSelected = () => {
        setSelected(!selected);
    }
    const publishingOnClick = () => {

    }

    const onClickEdit = () => {
        console.dir("onClickEdit");
        console.dir(recipe);
        navigate(`/admin/recipe-form/edit/${recipe.id}`, { state: recipe });
    }

    return (
        <div style={{padding: 10}}>
            <Card sx={{ width: 250}} style={{ border: selected ? '5px solid #8080ff' : 'none', cursor: "pointer" }}>
                <CardMedia
                    component="img"
                    alt="recipe image"
                    height="200"
                    image={recipe.image}
                    onClick={onClickSelected}
                />
                <CardContent>
                    <Typography variant="h6" style={{ overflow: "hidden", whiteSpace: "nowrap"}} >
                    {recipe.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing style={{justifyContent:"center"}}>
                    {
                        recipe.status === "published" ? 
                        <Button color="success" size="small">unpublish</Button>
                        :
                        <Button color="success" size="small">Publish</Button>
                    }
                    <Button size="small" onClick={onClickEdit}>Edit</Button>
                    <Button color="error" size="small">Delete</Button>
                </CardActions>
            </Card>
        </div>
        
    );
}
export default RecipeCard;