import React, { useState } from "react";
import Recipes from "./Recipes.tsx";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "./RecipeAdmin.css";
import { useNavigate } from "react-router-dom";

interface RecipesPageProps {
    recipes: Array<Object>
}

const RecipesPage = ({recipes}: RecipesPageProps) => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");

    const onClickAddRecipe = () => {
        navigate("recipe-form/create");
    }


    return (
        <div style={{width: '100%'}}>
            <div className="admin-header">
                <h1>Recipes</h1>
                <Button style={{height: 50, margin: "auto 0px"}} onClick={onClickAddRecipe} size="small" variant="contained">Add Recipe</Button>
            </div>

            <div className="filters-and-search-container">
                <div className="search-container">
                    <TextField placeholder="Search Recipes" fullWidth/>
                </div>
                <div className="filters-container">   
                    <Button variant="contained" fullWidth>Select All</Button>   
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            value={status}
                            label="Status">
                            <MenuItem value={"published"}>Published</MenuItem>
                            <MenuItem value={"unpublished"}>Unpublished</MenuItem>
                            <MenuItem value={"draft"}>Draft</MenuItem>
                            <MenuItem value={"archived"}>Archived</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            value={category}
                            label="Status">
                            <MenuItem value={"published"}>Published</MenuItem>
                            <MenuItem value={"unpublished"}>Unpublished</MenuItem>
                            <MenuItem value={"Draft"}>Draft</MenuItem>
                            <MenuItem value={"Archived"}>Archived</MenuItem>
                        </Select>
                    </FormControl>
                    <Button>Sort</Button>
                </div>
            </div>
            <div className="applied-filters-container">
                <Button>Clear Filter</Button>
            </div>
            <Recipes/>
        </div>
    )
}

export default RecipesPage;