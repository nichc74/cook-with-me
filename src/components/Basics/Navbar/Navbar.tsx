import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    var list = [
        { 
            name: 'Recipes',
            path: "/recipes",
        },
        { 
            name: "By Category",
            path: "/categories",
        },
        { 
            name: "By Cuisine",
            path: "/cuisines",
        }
    ]

    const [tab, setTab] = useState(0);

    const navigate = useNavigate();



    const navigateToDestination = (path: string, tab: number) => {
        navigate(path, { state: { path: path } });
        setTab(tab);
    }

    return (
        <div className="navbar-container-outer">
            <div className="navbar-container-inner">
            { 
                list.map((item, index) : any => (
                    <a className="navbar-item" onClick={() => navigateToDestination(item.path, index)}>
                        {tab == index ? 
                            <p className="navbar-item-label" style={{color: "black"}}> 
                                {item.name} 
                            </p>
                        :
                            <p className="navbar-item-label" > 
                                {item.name} 
                            </p>
                        }
                    </a>
                ))
            }
            </div>
        </div>
    )
}

export default Navbar;