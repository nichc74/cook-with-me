import React from 'react';
import './CollectionBox.css';
import { useNavigate } from 'react-router-dom';
import { getRecipes } from '../../../apis/AdminAPI/RecipeAPI.js';
import { updateRecipes } from '../../../store/actions/recipesActions.js';
import { useDispatch } from "react-redux";

interface CategoryBox {

}

const CollectionBox = ({collection, collectionPath}: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = async () => {
        navigate(`/${collectionPath}/${collection.name}`)
        const recipes = await fetchRecipeCollection();
        dispatch(updateRecipes(recipes));
    }

    const fetchRecipeCollection = async () => {
        const recipes = await getRecipes(collectionPath, collection.name);
        return recipes;
    }
    
    return (
        <div className="CategoryBox-main" onClick={handleClick}>
            <div style={{width: `${180}px`, height: `${180}px`, margin: "auto", backgroundColor: "white", border: "2px solid darkblue", display: "flex"}}>
                {/* <img
                    className="CategoryBox-image"
                    alt="Category Image"
                    // src={recipe.image}
                /> */}

                <div className="CategoryBox-name" style={{margin: "auto"}}>
                    {collection.name} 
                </div>
            </div>
    </div>
    )
}
export default CollectionBox;

