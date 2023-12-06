import React from "react";
import { Link, useNavigate } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    var list = [
        { 
            name: 'Recipes',
            path: "/recipes",
        },
        { 
            name: 'Categories',
            path: "/categories",
        },
        { 
            name: 'Entrees',
            path: "/entrees",
        }
    ]


    const navigate = useNavigate();

    const backHomePage = (path: string) => {
        navigate(path);
    }

    return (
        <div className="navbar-container-outer">
            <div className="navbar-container-inner">
            { 
                list.map((item) : any => (
                    <div className="navbar-item">
                        <a className="navbar-item-label" onClick={() => backHomePage(item.path)}> 
                            {item.name} 
                        </a>
                    </div>
                ))
            }
            </div>
          
        </div>
    )
}

export default Navbar;