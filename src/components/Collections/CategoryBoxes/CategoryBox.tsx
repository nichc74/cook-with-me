import React from 'react';
import './CategoryBox.css';
import { useNavigate } from 'react-router-dom';
interface CategoryBox {

}

const CategoryBox = ({category}: any) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/categories/${category.name}`)
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
            {category.name} 
        </div>
    </div>
    )
}
export default CategoryBox;

