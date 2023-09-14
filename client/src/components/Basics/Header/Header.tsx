import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { TextField } from "@mui/material";

const Header = () => {
    return (
        <div className="navbarContainer">
            <Link style={{height: "inherit"}} to={"/"}>
                <img className="logo" src="https://res.cloudinary.com/dufsumsmb/image/upload/v1694724055/271408200_602409760868028_4501220399632729979_n_ooa15h.jpg" alt="logo" />
            </Link>
            <div style={{margin: "auto 60px"}}>
                <TextField style={{width: 300}}/>
            </div>
        </div>
    )
}

export default Header;