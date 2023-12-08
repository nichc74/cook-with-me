import React from "react";
import CategoryBox from './CategoryBoxes/CategoryBox';


interface CategoriesProps {
    categories: Array<Object>,
}

const Categories = ({categories}: CategoriesProps) => {
    
    return (
        <div className="recipe-boxes-container">
            {
                categories.map((category: any) => (
                    <CategoryBox key={category.id}  category={category}/>
                ))
            }
        </div>
    )
}

export default Categories;