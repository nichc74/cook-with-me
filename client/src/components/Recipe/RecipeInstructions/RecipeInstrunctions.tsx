import React from "react";
import Instruction from "./Instruction.tsx";

const RecipeInstructions = ({recipeComponentInstructions}) => {
    return (
        <div>
            {
                recipeComponentInstructions.map((component: any) => (
                    <div>
                        <b>{component.component_name}</b>
                        {
                            component.instructions.map((instruction: any, index: number) => (
                                <Instruction key={index} instruction={instruction}/>
                            ))
                        }   
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeInstructions;