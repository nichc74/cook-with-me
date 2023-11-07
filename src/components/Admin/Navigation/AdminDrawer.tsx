import React from "react";
import './AdminDrawer.css';
import { Button } from "@mui/material";

const AdminDrawer = ({tab, changeTab, drawerItems}: any) => {
    
    const updateCompenontTab = (index: number) => {
        changeTab(index);
    }

    return (
       <div className="admin-drawer-container">
            <div className="drawer">
                {   
                    drawerItems.map((item, index) => (
                        <div key={item.title}>
                        {
                            tab === index ? 
                            <Button variant="contained" fullWidth className="button-container" onClick={() => updateCompenontTab(index)}>
                                {item.title}
                            </Button>
                            :
                            <Button fullWidth className="button-container" onClick={() => updateCompenontTab(index)}>
                                {item.title}
                            </Button>
                        }
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default AdminDrawer;