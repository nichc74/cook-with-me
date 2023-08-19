import React, { useState } from 'react';
import { Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateMetadata, updateSummary } from '../../../store/actions/recipeActions';
import ImageUpload from '../../Basics/ImageUploader/ImageUpload.tsx';

const RecipeMetadataForm = () => {
    const dispatch = useDispatch();

    const [metadata, setMetadata] = useState({
        title: '',
        author: '',
        prepTime: 0,
        cookTime: 0,
        cuisine: '',
        category: '',
        urlSlug: '',
        isPublished: false,
        serves: 0
    });
    const [summary, setSummary] = useState('');

    const handleMetadataInput = (field: string, value: string) => {
        setMetadata(prevMetadata => ({
            ...prevMetadata,
            [field]: value
        }));
        const updatedMetadata = {
            ...metadata,
            [field]: value
        };
        setMetadata(updatedMetadata);
        dispatch(updateMetadata(updatedMetadata));
    };

    const handleSummaryInput = (e) => {
        const value = e.target.value;
        setSummary(value);
        dispatch(updateSummary(value));
    };

    return (
        <div>
            <h1>Recipe</h1>

            <Paper style={{ display: 'flex', flexDirection: 'column', padding: 10, background: 'white' }}>
                <ImageUpload/>
                <br/>
                <TextField
                    id="outlined-search"
                    label="Title"
                    type="search"
                    value={metadata.title}
                    onChange={(e) => handleMetadataInput('title', e.target.value)}
                    style={{ width: 300, paddingBottom: 10 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div className="recipe-form-metadata">
                    <TextField
                        id="outlined-search"
                        label="Author"
                        type="search"
                        value={metadata.author}
                        onChange={(e) => handleMetadataInput('author', e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-search"
                        label="Cuisine"
                        type="search"
                        value={metadata.cuisine}
                        onChange={(e) => handleMetadataInput('cuisine', e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-search"
                        label="Category"
                        type="search"
                        value={metadata.category}
                        onChange={(e) => handleMetadataInput('category', e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="recipe-form-metadata">
                    <TextField
                        id="outlined-number"
                        label="Prep Time (minutes)"
                        type="number"
                        value={metadata.prepTime}
                        onChange={(e) => handleMetadataInput('prepTime', e.target.value)}
                        style={{ width: 150 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Cook Time (minutes)"
                        type="number"
                        value={metadata.cookTime}
                        onChange={(e) => handleMetadataInput('cookTime', e.target.value)}
                        style={{ width: 150 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Serves"
                        type="number"
                        style={{ width: 100 }}
                        value={metadata.serves}
                        onChange={(e) => handleMetadataInput('serves', e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <h1>Summary</h1>
                <TextField
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Recipe Summary"
                    multiline
                    value={summary}
                    onChange={handleSummaryInput}
                />
            </Paper>
        </div>
    );
};

export default RecipeMetadataForm;
