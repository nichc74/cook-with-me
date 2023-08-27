import React from "react";
import './Instructions.css'
const Instruction = ({instruction}) => {
    return (
        <div className="RecipeDetailPage-ingr">
            {
                instruction.image &&  
                <img className="instruction-image" src={instruction.image} height={'100%'} width={'50%'} />

            }
            <div className="step-container">
                <div className="step-number"><b>{instruction.step_id}.</b></div>
                <div className="step-description">{instruction.description}</div>
            </div>
          </div>
    )
}

export default Instruction;