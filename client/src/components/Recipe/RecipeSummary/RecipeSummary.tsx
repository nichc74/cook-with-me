import React from "react";
import './Summary.css';

const RecipeSummary = ({summary}) => {
    console.log(summary)
    return (
        <div className="summary-container">       
            {summary}
        </div>
    )
}

export default RecipeSummary;