import { useEffect, useState } from 'react';
import { Routes, Route, HashRouter, useLocation } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Basics/Navbar/Navbar.tsx';
import Categories from './components/Collections/Categories';
import Recipes from './components/Recipes/Recipes.tsx';
import Recipe from './components/Recipe/Recipe.tsx';
import RecipeForm from './components/Admin/RecipeForm/RecipeForm.tsx';
import { getRecipes, getCategories, getCuisines } from './apis/AdminAPI/RecipeAPI';
import Header from './components/Basics/Header/Header.tsx';
import AdminPage from './components/Admin/AdminPage.tsx';
import PageNotFound from './components/Pages/NotFound/PageNotFound.tsx';
import { useDispatch, useSelector} from 'react-redux';
import { updateRecipes } from './store/actions/recipesActions';

function App() {
    const dispatch = useDispatch();
    const location = useLocation();

    const reduxRecipes = useSelector((state) => state.recipesReducer.recipes);
    const [recipes, setRecipes] = useState(reduxRecipes);
    const [categories, setCategories] = useState([]);
    const [cuisines, setCuisines] = useState([]);

    const path = '/';

    useEffect(() => {
        setRecipes(reduxRecipes);
    }, [reduxRecipes]);

    useEffect(() => {
        if (location.state) {
            fetchRecipes(location.state.collectionPath, location.state.collectionName);
        }
        else {
            fetchRecipes();
        }
        fetchCategories();
        fetchCuisines();
    }, [location.state]);

    const fetchRecipes = async (collection="", collectionName="") => {
        try {
            const fetchedRecipes = await getRecipes(collection, collectionName);
            dispatch(updateRecipes(fetchedRecipes));
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const fetchedCategories = await getCategories();
            setCategories(fetchedCategories);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const fetchCuisines = async () => {
        try {
            const fetchedCuisines = await getCuisines();
            setCuisines(fetchedCuisines);
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
                        <Route exact path={`${path}/recipes`} element={<Recipes recipes={recipes}/> }/>
                        <Route path={`${path}recipes/:slug`} element={<Recipe/>}/>

                        <Route exact path={`${path}/categories`} element={<Categories collections={categories} collectionPath={'categories'} />}/>
                        {
                            categories.map((category) => (
                                <Route key={category.id} path={`${path}categories/${category.name}`} element={<Recipes recipes={recipes}/>}/>
                            ))
                        }
                        <Route exact path={`${path}/cuisines`} element={<Categories collections={cuisines} collectionPath={'cuisines'}/> }/>
                        {
                            cuisines.map((cuisine) => (
                                <Route key={cuisine.id} path={`${path}cuisines/${cuisine.name}`} element={<Recipes recipes={recipes}/>}/>
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



