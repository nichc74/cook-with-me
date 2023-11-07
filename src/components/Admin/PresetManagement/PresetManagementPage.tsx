import React from "react";
import Presets from "./Presets";


const PresetManagementPage = () => {  
    return (
        <div style={{width: '100%'}}>
            <div className="admin-header">
                <h1>Presets</h1>
            </div>
            <Presets/>
        </div>
    )
}

export default PresetManagementPage;