import React from "react";
import CollectionBox from './CollectionBox/CollectionBox';


interface CategoriesProps {
    collections: Array<Object>,
    collectionPath: string
}

const Collections = ({collections, collectionPath}: CategoriesProps) => {
    return (
        <div className="recipe-boxes-container">
            {
                collections.map((collection: any) => (
                    <CollectionBox key={collection.id}  collection={collection} collectionPath={collectionPath}/>
                ))
            }
        </div>
    )
}

export default Collections;