import React from "react";
import Instruction from "./Instruction.tsx";

const RecipeInstructions = ({recipeComponentInstructions}) => {
    return (
        <div>
            <div className="RecipeDetailPage-ingr-label RecipeDetailPage-body-label">
                Instructions
            </div>
            {
                recipeComponentInstructions.map((component: any) => (
                    <div className="instruction-container">
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