import React, { useEffect, useState } from "react";
import Recipes from "./Recipes.tsx";
import { Button, FormControl, InputLabel, MenuItem, Pagination, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getAllRecipesInAdmin, getCategories, getCuisines } from "../../../apis/AdminAPI/RecipeAPI.js";
import { useNavigate } from "react-router-dom";
import "./RecipeAdmin.css";

const RecipesPage = ({}) => {
    const navigate = useNavigate();

    const [page, setPage] = React.useState(1);
    const [searchTerm, setSearchTerm] = useState("")
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cuisines, setCuisines] = useState([])
    const [numPages, setNumPages] = useState(0);
    
    useEffect(() => {
        fetchResources();
    }, []);

    const onClickAddRecipe = () => {
        navigate("recipe-form/create");
    }


    const fetchResources = async () => {
        try {
            fetchRecipePage(1);
            fetchCuisinesAndCategories();
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
    }


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (value !== page) {
            setPage(value);
            fetchRecipePage(value);
        }
    };

    const fetchRecipePage = async (pageNumber: number) => {
        const fetchedRecipes = await getAllRecipesInAdmin(pageNumber);
        setRecipes(fetchedRecipes.recipes);
        setNumPages(fetchedRecipes.numPages);
    }

    const fetchCuisinesAndCategories = async() => {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
        const fetchedCuisines = await getCuisines();
        setCuisines(fetchedCuisines);
    }

    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    }

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    }

    const handleCuisineChange = (event: SelectChangeEvent) => {
        setCuisine(event.target.value as string);
    }

    const handleFilterSubmit = () => {
        console.dir({
            searchTerm,
            status, 
            category, 
            cuisine
        });
    }

    const handleSubmit = (event: { keyCode?: number; preventDefault?: any; }) => {
        event.preventDefault();
        if (searchTerm !== "") {
            searchContent();
        }
    };

    const searchContent = async () => {
        searchRecipes(searchTerm).then((results : any) => {
            setSearchResults(results);
        });
    }

    const keyPress = (e: { keyCode: number; }) => {
        if(e.keyCode === 13){
           handleSubmit(e);
        }
    }

    const setSearch = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        setSearchTerm(newValue);
    }

    return (
        <div className="recipe-admin-page-container">
            <div className="admin-header">
                <h1>Recipes</h1>
                <Button style={{height: 50, margin: "auto 0px"}} onClick={onClickAddRecipe} size="small" variant="contained">Add Recipe</Button>
            </div>

            <div className="filters-and-search-container">
                <FormControl fullWidth onSubmit={handleSubmit}>
                    <TextField 
                        type="search"
                        onKeyDown={keyPress}
                        value={searchTerm}
                        onChange={setSearch}
                        placeholder='Search Recipes'
                    />
                </FormControl>

                <div className="filters-container">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            value={status}
                            label="Status"
                            onChange={handleStatusChange}>
                            <MenuItem value={"published"}>Published</MenuItem>
                            <MenuItem value={"unpublished"}>Unpublished</MenuItem>
                            <MenuItem value={"archived"}>Archived</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            value={category}
                            label="Category"
                            onChange={handleCategoryChange}>
                            {categories.map((category: any) => (
                                <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
                        <Select
                            value={cuisine}
                            label="Cuisine"
                            onChange={handleCuisineChange}>
                            {cuisines.map((cuisine: any) => (
                                <MenuItem key={cuisine.id} value={cuisine.name}>{cuisine.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <Button variant="contained" color="success" onClick={handleFilterSubmit}>Filter</Button> 
            </div>
            
            <Recipes recipes={recipes} />

            <div className="AdminPage-pagination-container">
                <Pagination page={page} onChange={handleChange} count={numPages}/>
            </div>
        </div>
    )
}

export default RecipesPage;