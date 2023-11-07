import React from "react";

const AdminContent = ({component}) => {
    return (
        <div style={{padding: "24px", height: "100%", width: "100%", display: "flex", borderLeft: "0.5px solid rgb(37, 37, 37, 0.5)"}}>
            {component}
        </div>
    )
}

export default AdminContent;