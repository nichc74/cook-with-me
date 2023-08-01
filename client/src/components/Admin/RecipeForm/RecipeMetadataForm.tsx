import React, {useState} from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const RecipeMetadataForm = ({setMetadataOnForm}) => {
    //TODO: Take this out when you integrate with API
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [prepTime, setPrepTime] = useState("")
    const [cookTime, setCookTime] = useState("")
    const [cuisineType, setMealType] = useState("")
    const [category, setCategory] = useState("")
    const [servings, setServings] = useState("")
    const [summary, setSummary] = useState("")

    const handleTitleInput = (e) => {
        setTitle(e.target.value)
    }
    const handleAuthorInput = (e) => {
        setAuthor(e.target.value)
    }
    const handlePrepInput = (e) => {
        setPrepTime(e.target.value)
    }
    const handleCookInput = (e) => {
        setCookTime(e.target.value)
    }
    const handleCuisineTypeInput = (e) => {
        setMealType(e.target.value)
    }
    const handleCategoryInput = (e) => {
        setCategory(e.target.value)
    }
    const handleServingsInput = (e) => {
        setServings(e.target.value)
    }

    const handleSummaryInput = (e) => {
        setServings(e.target.value)
    }
        
    return (
        <div>
            <h1>Recipe</h1>
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
                        label="Prep Time"
                        type="number"
                        value={prepTime}
                        onChange={handlePrepInput}
                        style={{width: 100}}
                        
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Cook Time"
                        type="number"
                        value={cookTime}
                        onChange={handleCookInput}
                        style={{width: 100}}
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
        </div>
    )
}

export default RecipeMetadataForm;