import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import RoundedTextField from "../TextFields/RoundedTextField";
import { Button, TextField, FormControl } from "@mui/material";
import SearchDrawer from "../SearchComponent/SearchDrawer";
import { searchRecipes } from "../../../apis/AdminAPI/RecipeAPI.js";

const Header = () => {
    const [searching, setSearching] = useState(false);
    const [searchTerm, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState(null);

    const navigate = useNavigate();

    useEffect(()=> {
    }, [searchResults])

    const backHomePage = () => {
        navigate('/recipes');
    }

    const handleSubmit = (event: { keyCode?: number; preventDefault?: any; }) => {
        event.preventDefault();
        if (searchTerm !== "") {
            setSearching(true);
            searchContent();
        }
    };

    const keyPress = (e: { keyCode: number; }) => {
        if(e.keyCode === 13){
           handleSubmit(e);
        }
    }

    const setSearch = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        setSearchInput(newValue);
    }

    const closeSearch = () => {
        setSearching(false);
    }

    const searchContent = async () => {
        searchRecipes(searchTerm).then((results : any) => {
            setSearchResults(results);
        });
    }


    return (
        <div className="navbarContainer">
            <Button style={{height: "inherit"}} onClick={() => backHomePage()}>
                <img className="logo" src="https://res.cloudinary.com/dufsumsmb/image/upload/v1694724055/271408200_602409760868028_4501220399632729979_n_ooa15h.jpg" alt="logo" />
            </Button>
            <div style={{margin: "auto 60px"}}>
                <FormControl onSubmit={handleSubmit}>
                    <RoundedTextField 
                        type="search"
                        onKeyDown={keyPress}
                        value={searchTerm}
                        onChange={setSearch}
                        placeholder='Search Recipes'
                    />
                </FormControl>
            </div>
            <SearchDrawer
                searchTerm={searchTerm}
                handleSubmit={handleSubmit}
                setSearch={setSearch}
                searching={searching}
                closeSearch={closeSearch}
                searchResults={searchResults}
            />
        </div>
    )
}

export default Header;