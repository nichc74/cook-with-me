import { useEffect, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Basics/Navbar/Navbar.tsx';
import Categories from './components/Collections/Categories';
// import Cuisines from '';
import Recipes from './components/Recipes/Recipes.tsx';
import Recipe from './components/Recipe/Recipe.tsx';
import RecipeForm from './components/Admin/RecipeForm/RecipeForm.tsx';
import { getRecipes } from './apis/AdminAPI/RecipeAPI';
import Header from './components/Basics/Header/Header.tsx';
import AdminPage from './components/Admin/AdminPage.tsx';
import PageNotFound from './components/Pages/NotFound/PageNotFound.tsx';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([
        { 
            id:  6,
            name: "Entree",
        },  
        { 
            id: 27,
            name: "Side",
        },  
        { 
            id: 30,
            name: "Desserts",
        },  
        { 
            id: 59,
            name: "Sandwich",
        },  
        { 
            id: 73,
            name: "Main"
        }
    ]);
    const [cuisines, setCuisines] = useState([
        { 
            id:  1,
            name: "Korean",
        },  
        { 
            id: 2,
            name: "Asian",
        },  
        { 
            id: 3,
            name: "Asian Esque",
        },  
        { 
            id: 4,
            name: "Western",
        }
    ]);

    const path = '/';

    useEffect(() => {
        fetchRecipes();
        // fetchCategories();
        // fetchCuisines();

    }, []);

    const fetchRecipes = async () => { // Make fetchRecipes async
        try {
            const fetchedRecipes = await getRecipes();
            setRecipes(fetchedRecipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };
    
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>

            <Navbar/>

            <div className="App-main-body">
                <div className="App-recipeBoxes">
                    <Routes>
                        <Route exact path={`${path}admin`} element={<AdminPage/>}/>
                        <Route exact path={`${path}admin/recipe-form/create`} element={<RecipeForm/> }/>
                        <Route path={`${path}admin/recipe-form/edit/*`} element={<RecipeForm/>} />

                        {/* <Route exact path={`${path}/categories`} element={<div>BY CATEGORIES</div>}/> */}
                        <Route exact path={`${path}/categories`} element={<Categories categories={categories}/>}/>
                        {
                            categories.map((category) => (
                                <Route key={category.id} path={`${path}categories/${category.name}`}/>
                            ))
                        }

                        <Route exact path={`${path}/cuisines`} element={<Categories categories={cuisines}/> }/>
                        {
                            cuisines.map((cuisine) => (
                                <Route key={cuisine.id} path={`${path}cuisines/${cuisine.name}`}/>
                            ))
                        }

                        <Route exact path={`${path}/recipes`} element={<Recipes recipes={recipes}/> }/>
                        <Route path={`${path}recipes/:slug/:id`} element={<Recipe/>}/>
                        {
                            recipes.map((recipe) => (
                                <Route key={recipe.id} path={`${path}recipes${recipe.url_slug}`} element={<Recipe recipe={recipe} recipe_id={recipe.id}/> }/>
                            ))
                        }
                        <Route exact path="/*" element={<PageNotFound/>}/>
                    </Routes>
                </div>
            </div>
            <footer className="App-footer">
                footer
            </footer>
        </div>
    );
}

export default App;



