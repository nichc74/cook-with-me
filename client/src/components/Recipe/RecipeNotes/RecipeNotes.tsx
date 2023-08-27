import React from "react";

const RecipeNotes = ({notes}) => {
    return (
        <div>
            <div className="RecipeDetailPage-ingr-label RecipeDetailPage-body-label">
                Notes
            </div>
            
            {
                notes.map((note: any, index: number) => (
                    <div className="RecipeDetailPage-ingr">
                        <div className="step-container">
                            <div className="step-number"><b>{note.step_id}.</b></div>
                            <div className="step-description">{note.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeNotes;