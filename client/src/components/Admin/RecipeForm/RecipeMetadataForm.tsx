import React, { useEffect, useRef, useState } from 'react';
import { Paper, TextField, Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateMetadata, updateSummary } from '../../../store/actions/recipeActions';
import ImageIcon from '@mui/icons-material/Image';
import Add from '@mui/icons-material/Add';

interface MetadataProps {
    author: string,
    category: string,
    cook_time: number,
    cuisine: string,
    id: number,
    image: string,
    prep_time: number,
    serves: number,
    source_link: string,
    status: string,
    title: string,
}

interface RecipeMetadataFormProps {
    recipeMetadata: MetadataProps,
    recipeSummary: string
}

const RecipeMetadataForm = ({ recipeMetadata, recipeSummary }: RecipeMetadataFormProps) => {
    const [metadata, setMetadata] = useState<MetadataProps>(recipeMetadata || {
        author: '',
        category: '',
        cook_time: 0,
        cuisine: '',
        id: 0,
        image: '',
        prep_time: 0,
        serves: 0,
        source_link: '',
        status: '',
        title: '',
        urlSlug: '',
    });


    const [summary, setSummary] = useState(recipeSummary || '');

    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (recipeMetadata) {
            setMetadata(recipeMetadata);
            dispatch(updateMetadata(recipeMetadata));
        }
        if (recipeSummary) {
            setSummary(recipeSummary[0].summary);
            dispatch(updateSummary(recipeSummary));
        }
    }, [recipeMetadata, recipeSummary]);

    const handleMetadataInput = (field: keyof MetadataProps, value: string | number) => {
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

    const handleSummaryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSummary(value);
        dispatch(updateSummary(value));
    };

    const handleUploadClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result as string;
                handleMetadataInput('image', imageData);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        handleMetadataInput('image', '');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    
    return (
        <div>
            <h1>Recipe Form</h1>

            <Paper style={{ display: 'flex', flexDirection: 'column', padding: 10, background: 'white' }}>
                <div style={{width: "100%", margin: 'auto', display: 'flex', flexDirection: "column"}}>
                    {metadata.image && 
                        <Button className="remove-image" onClick={removeImage}>
                            <Tooltip title="Delete">
                                <img className="image-button" src={metadata.image ? metadata.image : '' } alt="Uploaded"/>
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
                <div className="recipe-form-metadata">
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

                    <TextField
                        id="outlined-search"
                        label="Source Link"
                        type="search"
                        value={metadata.source_link}
                        onChange={(e) => handleMetadataInput('source_link', e.target.value)}
                        style={{ width: 300, paddingBottom: 10 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />  
                </div>

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
                        value={metadata.prep_time}
                        onChange={(e) => handleMetadataInput('prep_time', e.target.value)}
                        style={{ width: 150 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Cook Time (minutes)"
                        type="number"
                        value={metadata.cook_time}
                        onChange={(e) => handleMetadataInput('cook_time', e.target.value)}
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


