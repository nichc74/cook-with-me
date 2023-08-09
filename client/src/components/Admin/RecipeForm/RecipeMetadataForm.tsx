import React, {useState} from 'react';
import { Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateMetadata, updateSummary } from '../../../store/actions/recipeActions';

const RecipeMetadataForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [prepTime, setPrepTime] = useState(0)
    const [cookTime, setCookTime] = useState(0)
    const [cuisineType, setCuisineType] = useState("")
    const [category, setCategory] = useState("")
    const [servings, setServings] = useState(1)
    const [summary, setSummary] = useState("")

    const handleTitleInput = (e) => {
        setTitle(e.target.value)
        setMetadata();
    }
    const handleAuthorInput = (e) => {
        setAuthor(e.target.value)
        setMetadata();
    }
    const handlePrepInput = (e) => {
        setPrepTime(e.target.value)
        setMetadata();
    }
    const handleCookInput = (e) => {
        setCookTime(e.target.value)
        setMetadata();
    }
    const handleCuisineTypeInput = (e) => {
        setCuisineType(e.target.value)
        setMetadata();
    }
    const handleCategoryInput = (e) => {
        setCategory(e.target.value)
        setMetadata();
    }
    const handleServingsInput = (e) => {
        setServings(e.target.value)
        setMetadata();
    }

    const handleSummaryInput = (e) => {
        setSummary(e.target.value)
        dispatch(updateSummary(summary));
    }

    const setMetadata = () => {
        var data = {
            title: title,
            author: author,
            prepTime: prepTime,
            cookTime: cookTime,
            cuisineType: cuisineType,
            category: category,
            servings: servings
        }
        dispatch(updateMetadata(data));
    }

    return (
        <div>
            <h1>Recipe</h1>
            <Paper style={{display: "flex" ,flexDirection: "column", padding: 10, background: "white"}}>
   
                <TextField id="outlined-search" label="Title" type="search" 
                value={title} 
                onChange={handleTitleInput}
                style={{width: 300, paddingBottom: 10}}
                InputLabelProps={{
                        shrink: true,
                    }}/> 
                <div className="recipe-form-metadata">
                    <TextField id="outlined-search" label="Author" type="search"  value={author} onChange={handleAuthorInput} InputLabelProps={{
                            shrink: true,
                        }}/> 
                    <TextField id="outlined-search" label="Cuisine" type="search" value={cuisineType} onChange={handleCuisineTypeInput} InputLabelProps={{
                            shrink: true,
                        }}/> 
                    <TextField id="outlined-search" label="Category" type="search" value={category} onChange={handleCategoryInput} InputLabelProps={{
                        shrink: true,
                    }}/> 
                </div>
                <div className="recipe-form-metadata">
                    <TextField
                        id="outlined-number"
                        label="Prep Time (minutes)"
                        type="number"
                        value={prepTime}
                        onChange={handlePrepInput}
                        style={{width: 150}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Cook Time (minutes)"
                        type="number"
                        value={cookTime}
                        onChange={handleCookInput}
                        style={{width: 150}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Serves"
                        type="number"
                        style={{width: 100}}
                        value={servings}
                        onChange={handleServingsInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <h1>Summary</h1>
                <TextField fullWidth id="outlined-multiline-flexible" label="Recipe Summary" multiline 
                    value={summary} onChange={handleSummaryInput}
                />
            </Paper>
        </div>
    )
}

export default RecipeMetadataForm;