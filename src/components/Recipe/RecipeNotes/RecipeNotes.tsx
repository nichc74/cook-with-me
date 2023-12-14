import React from "react";
import "./Notes.css"

interface NotesProps { 
    notes: Array<NoteProps>
}

interface NoteProps {
    stepId: number;
    description: string;
}

const RecipeNotes = ({notes}: NotesProps) => {
    return (
        <div className="notes-container">
            { notes.length > 0 && 
                 <div className="RecipeDetailPage-ingr-label RecipeDetailPage-body-label">
                    Notes
                </div>
            }
            {
                notes.map((note: any, index: number) => (
                    <div className="RecipeDetailPage-ingr" key={note.id}>
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