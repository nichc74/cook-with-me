import React from "react";
import CategoryBox from './CategoryBoxes/CategoryBox';


interface CategoriesProps {
    collections: Array<Object>,
    collectionPath: string
}

const Categories = ({collections, collectionPath}: CategoriesProps) => {
    return (
        <div className="recipe-boxes-container">
            {
                collections.map((collection: any) => (
                    <CategoryBox key={collection.id}  collection={collection} collectionPath={collectionPath}/>
                ))
            }
        </div>
    )
}

export default Categories;