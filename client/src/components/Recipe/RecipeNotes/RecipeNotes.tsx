import React from "react";
import "./Notes.css"
const RecipeNotes = ({notes}) => {
    return (
        <div className="notes-container">
            <div className="RecipeDetailPage-ingr-label RecipeDetailPage-body-label">
                Notes
            </div>
            
            {
                notes.map((note: any, index: number) => (
                    <div className="RecipeDetailPage-ingr">
                        <div className="note-step-container">
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