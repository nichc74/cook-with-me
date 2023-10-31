import React, { useEffect, useState } from "react";
import Recipes from "./Recipes.tsx";
import { Button, FormControl, InputLabel, MenuItem, Pagination, Select, TextField } from "@mui/material";
import "./RecipeAdmin.css";
import { getAllRecipesInAdmin } from "../../../apis/AdminAPI/RecipeAPI.js";
import { useNavigate } from "react-router-dom";

// interface RecipesPageProps {
//     recipes: Array<Object>
// }

const RecipesPage = ({}) => {
    const navigate = useNavigate();

    const [page, setPage] = React.useState(1);
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [numPages, setNumPages] = useState(0);
    
    useEffect(() => {
        fetchRecipes();
    }, []);

    const onClickAddRecipe = () => {
        navigate("recipe-form/create");
    }

    const fetchRecipes = async () => { // Make fetchRecipes async
        try {
            fetchRecipePage(1);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        fetchRecipePage(value);
    };

    const fetchRecipePage = async (pageNumber: number) => {
        if (pageNumber === page) {
            return;
        }
        const fetchedRecipes = await getAllRecipesInAdmin(pageNumber);
        setRecipes(fetchedRecipes.recipes);
        setNumPages(fetchedRecipes.numPages);
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
            
            <Recipes recipes={recipes} />

            <div className="AdminPage-pagination-container">
                <Pagination page={page} onChange={handleChange} count={numPages}/>
            </div>
        </div>
    )
}

export default RecipesPage;