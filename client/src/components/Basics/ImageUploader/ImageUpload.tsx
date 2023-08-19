import React, {useState} from 'react';
import { Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import './ImageUpload.css'


const ImageUpload = () => {
    const [image, setImage] = useState('');

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
    
    return (
        <div style={{width: "100%"}}>
            {image && 
            <img src={image} alt="Uploaded" className="image"></img>}
            <br/>

            <label htmlFor="contained-button-file">
                <Button style={{width: "100%"}} variant="contained" component="span">
                    <ImageIcon />
                    <input
                        accept="image/*"
                        id="contained-button-file"
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