import React from "react";

const RecipeNotes = ({notes}) => {
    return (
        <div>
            {
                notes.map((note, index) => (
                    <div>
                        <b>{note.step_id}.</b> {note.description}
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeNotes;