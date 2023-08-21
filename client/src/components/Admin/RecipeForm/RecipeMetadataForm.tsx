import React, { useRef, useState } from 'react';
import { Paper, TextField, Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateMetadata, updateSummary } from '../../../store/actions/recipeActions';
// import ImageUpload from '../../Basics/ImageUploader/ImageUpload.tsx';
import ImageIcon from '@mui/icons-material/Image';
import Add from '@mui/icons-material/Add';

const RecipeMetadataForm = () => {
    const [metadata, setMetadata] = useState({
        title: 'Japchae – Korean noodles',
        author: 'Josh Cheung',
        prepTime: 20,
        cookTime: 15,
        cuisine: 'Korean',
        category: 'Entree',
        urlSlug: '',
        isPublished: false,
        originalSource: '',
        serves: 5,
        recipeImage: ''
    });

    const [summary, setSummary] = useState('Hello world');

    const inputRef = useRef(null);
    const dispatch = useDispatch();

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


    const handleUploadClick = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;
            handleMetadataInput('recipeImage', imageData);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        handleMetadataInput('recipeImage', '')
        inputRef.current.value = null;
    }


    return (
        <div>
            <h1>Recipe</h1>

            <Paper style={{ display: 'flex', flexDirection: 'column', padding: 10, background: 'white' }}>
                <div style={{width: "100%"}}>
                    {metadata.recipeImage && 
                        <Button className="remove-image" onClick={removeImage}>
                            <Tooltip title="Delete">
                                <img className="image-button" src={metadata.recipeImage} alt="Uploaded"/>
                            </Tooltip>
                        </Button>
                }
                    <br/>

                    <label>
                        <Button style={{width: "100%"}} variant="contained" component="span">
                            <ImageIcon/> <Add/>
                            <input
                                ref={inputRef}
                                accept="image/*"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleUploadClick}
                            />
                        </Button>
                    </label>
                </div>
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
function dispatch(arg0: { payload: undefined; type: "recipeForm/updateMetadata"; }) {
    throw new Error('Function not implemented.');
}

