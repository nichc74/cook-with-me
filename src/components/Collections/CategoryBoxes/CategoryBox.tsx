import React from 'react';
import './CategoryBox.css';
import { useNavigate } from 'react-router-dom';
import { getRecipes } from '../../../apis/AdminAPI/RecipeAPI.js';
import { updateRecipes } from '../../../store/actions/recipesActions.js';
import { useDispatch } from "react-redux";

interface CategoryBox {

}

const CategoryBox = ({collection, collectionPath}: any) => {
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
            <div style={{width: `${180}px`, height: `${180}px`, margin: "auto", backgroundColor: "beige"}}>
                {/* <img
                    className="CategoryBox-image"
                    alt="Category Image"
                    // src={recipe.image}
                /> */}
            </div>
        <div className="CategoryBox-name">
            {collection.name} 
        </div>
    </div>
    )
}
export default CategoryBox;

