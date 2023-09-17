import React from "react";
import Recipes from "./Recipes.tsx";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import "./RecipeAdmin.css";
import { useNavigate } from "react-router-dom";

const RecipesPage = ({recipes}) => {
    const navigate = useNavigate();

    const onClickAddRecipe = () => {
        navigate("recipe-form/create");
    }
    return (
        <div>
            <div className="admin-header">
                <h1>Recipes</h1>
                <Button style={{height: 50, margin: "auto 0px"}} onClick={onClickAddRecipe} size="small" variant="contained">Add Recipe</Button>
            </div>

            <div className="filters-and-search-container">
                <div className="search-container">
                    <TextField placeholder="Search Recipes" fullWidth/>
                </div>
                <div className="filters-container">   
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={" "}
                        label="Status">
                        <MenuItem value={" "}>Status</MenuItem>
                        <MenuItem value={"Published"}>Published</MenuItem>
                        <MenuItem value={"Draft"}>Draft</MenuItem>
                        <MenuItem value={"Archived"}>Archived</MenuItem>
                    </Select>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={" "}
                        label="Category">
                        <MenuItem value={" "}>Category</MenuItem>
                        <MenuItem value={"Published"}>Published</MenuItem>
                        <MenuItem value={"Draft"}>Draft</MenuItem>
                        <MenuItem value={"Archived"}>Archived</MenuItem>
                    </Select>
                    <Button>Sort</Button>
                </div>
            </div>
            <div className="applied-filters-container">
                <Button>Clear Filter</Button>
            </div>
            <Recipes recipes={recipes}/>
        </div>
    )
}

export default RecipesPage;