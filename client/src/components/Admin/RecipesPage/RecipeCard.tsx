import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RecipeCard = ({recipe}) => {
    return (
        <div style={{padding: 10}}>
            <Card sx={{ width: 250}}>
                <CardMedia
                    component="img"
                    alt="recipe image"
                    height="200"
                    image={recipe.image}
                />
                <CardContent>
                    <Typography variant="h6" style={{ overflow: "hidden", whiteSpace: "nowrap"}} >
                    {recipe.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing style={{justifyContent:"center"}}>
                    <Button color="success" size="small">Publish</Button>
                    <Button size="small">Edit</Button>
                    <Button color="error" size="small">Delete</Button>
                </CardActions>
            </Card>
        </div>
        
    );
}
export default RecipeCard;