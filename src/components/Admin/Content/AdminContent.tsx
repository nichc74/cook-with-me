import React from "react";
import './AdminContent.css';

const AdminContent = ({component}) => {
    return (
        <div className="AdminContent-container">
            {component}
        </div>
    )
}

export default AdminContent;