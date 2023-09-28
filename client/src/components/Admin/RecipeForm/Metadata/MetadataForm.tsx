import React, { useState, useRef, useEffect } from "react";
import { Button, Paper, TextField, Tooltip } from "@mui/material";
import {Image, Add} from '@mui/icons-material';
import { updateMetadata } from '../../../../store/actions/recipeActions.js';
import { useDispatch } from 'react-redux';

import '../RecipeForm.css'

const MetadataForm = ({}) => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [sourceLink, setSourceLink] = useState("");
    const [author, setAuthor] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [category, setCategory] = useState("");
    const [prepTime, setPrepTime] = useState<number | undefined>(undefined);
    const [cookTime, setCookTime] = useState<number | undefined>(undefined);
    const [serves, setServes] = useState<number | undefined>(undefined);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const metadataToUpdate = {
            image,
            title,
            sourceLink,
            author,
            cuisine,
            category,
            prepTime,
            cookTime,
            serves,
        };

        dispatch(updateMetadata(metadataToUpdate));
    }, [image, title, sourceLink, author, cuisine, category, prepTime, cookTime, serves]);
    
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
            case "cuisine": 
                setCuisine(value);
                break;
            case "category": 
                setCategory(value);
                break;
            case "prepTime": 
                setPrepTime(value);
                break;
            case "cookTime": 
                setCookTime(value);
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
        if (inputRef.current) {
            inputRef.current.value = '';
        }
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
                <TextField
                    label="Cuisine"
                    type="search"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={cuisine}
                    onChange={(e) => handleMetadataInput('cuisine', e.target.value)}
                />
                <TextField
                    label="Category"
                    type="search"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={category}
                    onChange={(e) => handleMetadataInput('category', e.target.value)}
                />
            </div>
            <div className="recipe-form-metadata">
                <TextField
                    id="outlined-number"
                    label="Prep Time (minutes)"
                    type="number"
                    style={{ width: 150 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={prepTime}
                    onChange={(e) => handleMetadataInput('prepTime', e.target.value)}
                />
                <TextField
                    id="outlined-number"
                    label="Cook Time (minutes)"
                    type="number"
                    style={{ width: 150 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={cookTime}
                    onChange={(e) => handleMetadataInput('cookTime', e.target.value)}
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