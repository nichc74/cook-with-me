import React, { useState, useRef, useEffect } from "react";
import { Button, Paper, TextField, Tooltip, Autocomplete } from "@mui/material";
import {Image, Add} from '@mui/icons-material';
import { updateMetadata } from '../../../../store/actions/recipeActions.js';
import { useDispatch } from 'react-redux';

import '../RecipeForm.css'

interface MetadataProps {
    metadata: {
        author: string,
        category: string,
        cuisine: string,
        id: number,
        image: string,
        prep_time: string,
        cook_time: string,
        total_time: string
        serves: number,
        source_link: string,
        status: string,
        title: string
    }
    cuisinePresets: Array<string>
    categoryPresets: Array<string>
}

const MetadataForm = ({metadata, categoryPresets, cuisinePresets}: MetadataProps) => {
    const [id, setId] = useState(metadata.id || null)
    const [image, setImage] = useState(metadata.image || "");
    const [title, setTitle] = useState(metadata.title || "");
    const [sourceLink, setSourceLink] = useState(metadata.source_link || "");
    const [author, setAuthor] = useState(metadata.author || "");
    const [cuisine, setCuisine] = useState<string | null>(metadata.cuisine || "");
    const [category, setCategory] = useState<string | null>(metadata.category || "");
    const [prepTime, setPrepTime] = useState<string | undefined>(metadata.prep_time || "");
    const [cookTime, setCookTime] = useState<string | undefined>(metadata.cook_time || "");
    const [totalTime, setTotalTime] = useState<string | undefined>(metadata.total_time || "");
    const [serves, setServes] = useState<number | undefined>(metadata.serves || undefined);
  
  
    const dispatch = useDispatch();

    useEffect(() => {
        const metadataToUpdate = {
            id,
            image,
            title,
            sourceLink,
            author,
            cuisine,
            category,
            prepTime,
            cookTime,
            totalTime,
            serves,
        };
        dispatch(updateMetadata(metadataToUpdate));
    }, [metadata, image, title, sourceLink, author, cuisine, category, prepTime, cookTime, totalTime, serves]);
    
    const handleMetadataInput = (field: string, value: any) => {
        switch(field) {
            case "title": 
                setTitle(value);
                break;
            case "sourceLink": 
                setSourceLink(value);
                break;
            case "author": 
                setAuthor(value);
                break;
            case "prepTime": 
                setPrepTime(value);
                break;
            case "cookTime": 
                setCookTime(value);
                break;
            case "totalTime": 
                setTotalTime(value);
                break;
            case "serves":
                setServes(value);
                break;
            default:
                break;
        }
    }


    const handleUploadClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result as string;
                setImage(imageData);
            };
            reader.readAsDataURL(file);
        }
    };
    const removeImage = () => {
        setImage('');
    };
    
    return (
        <Paper style={{ display: 'flex', flexDirection: 'column', padding: 10, background: 'white' }}>
            <div style={{width: "100%", margin: 'auto', display: 'flex', flexDirection: "column"}}>
                {
                    image && 
                    <Button className="remove-image" onClick={removeImage}>
                        <Tooltip title="Delete">
                            <img className="image" src={image ? image : '' } alt="Uploaded"/>
                        </Tooltip>
                    </Button>
                }   

                <br/>

                <label>
                    <Button style={{width: "100%"}} variant="contained" component="span">
                        <Image/> <Add/>
                        <input
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
                    label="Title"
                    type="search"
                    style={{ width: 300, paddingBottom: 10 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={title}
                    onChange={(e) => handleMetadataInput('title', e.target.value)}
                />

                <TextField
                    label="Source Link"
                    type="search"
                    style={{ width: 300, paddingBottom: 10 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={sourceLink}
                    onChange={(e) => handleMetadataInput('sourceLink', e.target.value)}
                />  
            </div>

            <div className="recipe-form-metadata">
                <TextField
                    label="Author"
                    type="search"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={author}
                    onChange={(e) => handleMetadataInput('author', e.target.value)}
                />
                 <Autocomplete
                    options={cuisinePresets}
                    sx={{ width: '25%' }}
                    freeSolo
                    value={cuisine}

                    onChange={(event: any, newValue: string | null) => {
                        setCuisine(newValue)
                    }}
                    onInputChange={(event: any, newValue: string | null) => {
                        setCuisine(newValue)
                    }}
                    renderInput={(params) => 
                        <TextField {...params}                
                        InputLabelProps={{
                            shrink: true,
                        }} 
                        label="Cuisine" variant="outlined"/>
                    }
                />

                <Autocomplete
                    options={categoryPresets}
                    sx={{ width: '25%' }}
                    freeSolo
                    value={category}

                    onChange={(event: any, newValue: string | null) => {
                        setCategory(newValue)
                    }}
                    onInputChange={(event: any, newValue: string | null) => {
                        setCategory(newValue)
                    }}
                    renderInput={(params) => 
                        <TextField {...params}                
                        InputLabelProps={{
                            shrink: true,
                        }} 
                        label="Category" variant="outlined"/>
                    }
                />
            </div>
            <div className="recipe-form-metadata">
                <TextField
                    id="outlined-number"
                    label="Prep Time"
                    style={{ width: 150 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={prepTime}
                    onChange={(e) => handleMetadataInput('prepTime', e.target.value)}
                />
                <TextField
                    id="outlined-number"
                    label="Cook Time"
                    style={{ width: 150 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={cookTime}
                    onChange={(e) => handleMetadataInput('cookTime', e.target.value)}
                />
                <TextField
                    id="outlined-number"
                    label="Total Time"
                    style={{ width: 150 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={totalTime}
                    onChange={(e) => handleMetadataInput('totalTime', e.target.value)}
                />
                <TextField
                    id="outlined-number"
                    label="Serves"
                    type="number"
                    style={{ width: 100 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={serves}
                    onChange={(e) => handleMetadataInput('serves', e.target.value)}
                />
            </div>
        </Paper>
    )
}

export default MetadataForm;