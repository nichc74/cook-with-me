import React from "react";
import './Summary.css';

interface SummaryProps {
    summary: string
}

const RecipeSummary = ({summary}: SummaryProps) => {
    let summaryObj = summary.replace(/\\n/g, "<br/>");
    console.log(summaryObj);
    const theObj = {__html:summaryObj};

    return (
        <div className="summary-container">       
            <div dangerouslySetInnerHTML={theObj} />
        </div>
    )
}

export default RecipeSummary;