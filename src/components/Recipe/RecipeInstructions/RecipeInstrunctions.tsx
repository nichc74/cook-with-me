import React from "react";
import Instruction from "./Instruction.tsx";

const RecipeInstructions = ({recipeComponentInstructions}) => {
    return (
        <div className="instructions-container">
            <div className="RecipeDetailPage-ingr-label RecipeDetailPage-body-label">
                Instructions
            </div>
            {
                recipeComponentInstructions.map((component: any) => (
                    <div className="instruction-container" key={component.id}>
                        <b>{component.component_name}</b>
                        {
                            component.instructions.map((instruction: any, index: number) => (
                                <Instruction key={instruction.id} instruction={instruction} step_id={index}/>
                            ))
                        } 
                        <br/>  
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeInstructions;