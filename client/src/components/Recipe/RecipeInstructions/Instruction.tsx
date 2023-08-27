import React from "react";

const Instruction = ({instruction}) => {
    return (
        <div className="RecipeDetailPage-ingr">
            {
                instruction.image ?
                <div>
                    <img style={{justifyContent: "space-around"}} src={instruction.image} height={'100%'} width={'50%'} />
                    <br/>
                    <b>{instruction.step_id}.</b> {instruction.description}

                </div>
                : 
                <div>
                    <b>{instruction.step_id}.</b> {instruction.description}
                </div>
                

            }
          </div>
    )
}

export default Instruction;