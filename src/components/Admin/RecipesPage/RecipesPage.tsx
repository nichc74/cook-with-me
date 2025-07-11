import React, { useEffect, useState } from "react";
import Recipes from "./Recipes.tsx";
import { Button, FormControl, InputLabel, MenuItem, Pagination, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getAllRecipesInAdmin, getCategories, getCuisines } from "../../../apis/AdminAPI/RecipeAPI.js";
import { useNavigate } from "react-router-dom";
import "./RecipeAdmin.css";
import { CheckBox } from "@mui/icons-material";

const RecipesPage = ({}) => {
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [search, setSearchTerm] = useState("")
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [numPages, setNumPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [sortField, setSortField] = useState("updated_at");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    
    useEffect(() => {
        fetchResources();
    }, [status, category, cuisine, sortDirection, sortField]);

    const onClickAddRecipe = () => {
        navigate("recipe-form/create");
    }


    const fetchResources = async () => {
        try {
            fetchRecipePage(page);
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
        const ordering = sortDirection === "asc" ? sortField : `-${sortField}`;
        const fetchedRecipes = await getAllRecipesInAdmin({
            page: pageNumber,
            search,
            status, 
            category, 
            cuisine,
            ordering
        });
        setLoading(true);
        if (fetchedRecipes) {
            setRecipes(fetchedRecipes.recipes);
            setNumPages(fetchedRecipes.numPages);
            setLoading(false);
        }
    };

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

    const handleFilterSubmit = async () => {
        fetchRecipePage(page);
    }

    const handleSubmit = (event: { keyCode?: number; preventDefault?: any; }) => {
        event.preventDefault();
        if (search !== "") {
            handleFilterSubmit();
        }
    };

    const keyPress = (e: { keyCode: number; }) => {
        if(e.keyCode === 13){
           handleSubmit(e);
        }
    }

    const setSearch = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        setSearchTerm(newValue);
    }

    const handleClearFilter = () => {
        setSearchTerm("");
        setStatus("");
        setCategory("");
        setCuisine("");
        setSortDirection("desc");
        fetchRecipePage(page)
    }

    const handleSortChange = (field: string) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
        fetchRecipePage(page);
    };

    return (
        <div className="recipe-admin-page-container">
            <div className="admin-header">
                <h1>Recipes</h1>
                <Button style={{height: 50, margin: "auto 0px"}} onClick={onClickAddRecipe} size="small" variant="contained">Add Recipe</Button>
            </div>
            { loading ?
                <div>Loading Admin Page...</div>
                :
                <>
                    <div style={{justifyContent: "space-between"}}>
                        <Button color="error" onClick={handleClearFilter}>Clear Filter</Button> 
                        <Button color="success" onClick={handleFilterSubmit}>Filter</Button> 
                    </div>
                   
                    <Recipes 
                        recipes={recipes}
                        categories={categories}
                        cuisines={cuisines}
                        keyPress={keyPress}
                        setSearch={setSearch}
                        handleCuisineChange={handleCuisineChange}
                        handleCategoryChange={handleCategoryChange}
                        handleStatusChange={handleStatusChange}
                        status={status}
                        category={category}
                        cuisine={cuisine}
                        search={search}
                        sortField={sortField}
                        sortDirection={sortDirection}
                        handleSortChange={handleSortChange}
                    />

                    <div className="AdminPage-pagination-container">
                        <Pagination page={page} onChange={handleChange} count={numPages}/>
                    </div>
                </>
            }
            
        </div>
    )
}

export default RecipesPage;