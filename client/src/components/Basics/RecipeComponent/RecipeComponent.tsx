import { TextField } from "@mui/material";
import React, { useState } from "react";
interface ChildComponentProps {
    recipeItems: Array<object>
}

const RecipeComponent = ({recipeItems}: ChildComponentProps) => {
    const [componentName, setComponentName] = useState("");

    return (
        <div>
            <TextField
                label="component_name"
            />
            {/* {
                recipeItems.map((item: any) => (
                    {item}
                ))
            } */}

        </div>
    )
}

export default RecipeComponent;