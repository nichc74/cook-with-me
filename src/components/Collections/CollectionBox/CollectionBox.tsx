import React from 'react';
import './CollectionBox.css';
import { useNavigate } from 'react-router-dom';
import { getRecipes } from '../../../apis/AdminAPI/RecipeAPI.js';
import { updateRecipes } from '../../../store/actions/recipesActions.js';
import { useDispatch } from "react-redux";

const CollectionBox = ({collection, collectionPath}: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = async () => {
        const recipes = await fetchRecipeCollection();
        dispatch(updateRecipes(recipes));
        if (recipes) {
            navigate(`/${collectionPath}/${collection.name}`, 
                {
                    state: {
                        collectionPath: collectionPath,
                        collectionName: collection.name
                    }
                }
            )
        }
    }

    const fetchRecipeCollection = async () => {
        const recipes = await getRecipes(collectionPath, collection.name);
        return recipes;
    }
    
    return (
        <div className="CollectionBox-main" onClick={handleClick}>
            {
                collection.image ?
                    <div className="CollectionBox-image-container">
                    
                            <img
                                className="CollectionBox-image"
                                alt="Collection Image"
                                src={collection.image}
                            />
                            <div className="CollectionBox-text-gradient">
                            <div className="CollectionBox-name">
                                {collection.name} 
                            </div>
                        </div>
                    </div>
                :
                <div style={{width: `${180}px`, height: `${180}px`, margin: "auto", backgroundColor: "white", border: "2px solid darkblue", display: "flex"}}>
                    <div className="CollectionBox-name-pictureless " style={{margin: "auto"}}>
                        {collection.name} 
                    </div>
                </div>
            }
        </div>
    )
}
export default CollectionBox;

