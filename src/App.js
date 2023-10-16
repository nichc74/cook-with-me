import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Recipes from './components/Recipes/Recipes.tsx';
import Recipe from './components/Recipe/Recipe.tsx';
import RecipeForm from './components/Admin/RecipeForm/RecipeForm.tsx';
import { getRecipes } from './apis/AdminAPI/RecipeAPI';
import Header from './components/Basics/Header/Header.tsx';
import RecipesPage from './components/Admin/RecipesPage/RecipesPage.tsx';
import PageNotFound from './components/Pages/NotFound/PageNotFound.tsx';
function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
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
        <div style={{height: 16, width: "100%", background: "black"}}/>
      </header>
      <div className="App-main-body">
        <div className="App-recipeBoxes">
          <Routes>
            <Route exact path="/admin" element={<RecipesPage recipes={recipes}/>}/>
            <Route exact path="/admin/recipe-form/create" element={<RecipeForm/> }/>
            <Route path="/admin/recipe-form/edit/*" element={<RecipeForm/>} />
            <Route exact path="/" element={<Recipes recipes={recipes}/> }/>
            <Route path="/recipes/:slug/:id" element={<Recipe/>}/>
            {
              recipes.map((recipe) => (
                <Route key={recipe.id} path={`recipes${recipe.url_slug}`} element={<Recipe recipe={recipe} recipe_id={recipe.id}/> }/>
              ))
            }
            <Route exact path="/*" element={<PageNotFound/>}/>
          </Routes>
        </div>
      </div>
      <footer className="App-footer">
        Placeholder Header
      </footer>
    </div>
  );
}

export default App;
