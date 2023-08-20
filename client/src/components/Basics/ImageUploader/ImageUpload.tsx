import React, {useRef, useState} from 'react';
import { Button, Tooltip } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import Add from '@mui/icons-material/Add';
import './ImageUpload.css'


const ImageUpload = () => {
    const [image, setImage] = useState('');
    const inputRef = useRef(null);
    const handleUploadClick = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        console.log("path: " + file.name);
    };

    const removeImage = () => {
        setImage('');
        inputRef.current.value = null;
    }

    return (
        <div style={{width: "100%"}}>
            {image && 
            <Button className="remove-image" onClick={removeImage}>
                <Tooltip title="Delete">
                    <img className="image-button" src={image} alt="Uploaded"/>
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
    )
}
export default ImageUpload;