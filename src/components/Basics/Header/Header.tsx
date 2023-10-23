import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { Button, TextField } from "@mui/material";

const Header = () => {

    const navigate = useNavigate();

    const backHomePage = () => {
        navigate('/');
    }
    return (
        <div className="navbarContainer">
            <Button style={{height: "inherit"}} onClick={() => backHomePage()}>
                <img className="logo" src="https://res.cloudinary.com/dufsumsmb/image/upload/v1694724055/271408200_602409760868028_4501220399632729979_n_ooa15h.jpg" alt="logo" />
            </Button>
            <div style={{margin: "auto 60px"}}>
                <TextField/>
            </div>
        </div>
    )
}

export default Header;