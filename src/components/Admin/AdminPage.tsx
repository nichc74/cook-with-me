import React, { useState } from "react";
import AdminDrawer from "./Navigation/AdminDrawer";
import AdminContent from "./Content/AdminContent";
import RecipesPage from "./RecipesPage/RecipesPage";
import PresetManagementPage from "./PresetManagement/PresetManagementPage";

const drawerItems = [
    {   
        title: 'Recipes',
        component: <RecipesPage/>
    },
    {   
        title: 'Presets',
        component: <PresetManagementPage/>
    },
   
]

const AdminPage = () => {
    const [tab, setTab] = useState(0);
    const [component, setComponent] = useState(drawerItems[tab].component);
    
    const changeTab = (index: number) =>{
        setTab(index);
        setComponent(drawerItems[index].component);
    }
    
    return (
        <div style={{height: "100%", width: "100%", display: "flex", flexDirection: "row"}}>
            <AdminDrawer 
                drawerItems={drawerItems} 
                tab={tab} 
                changeTab={changeTab}
            />
            <AdminContent component={component}/>
        </div>
    )
}

export default AdminPage;