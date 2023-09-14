import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Recipes from './components/Recipes/Recipes.tsx';
import RecipeDetailPage from './components/RecipeDetailPage/RecipeDetailPage'
import Recipe from './components/Recipe/Recipe.tsx';
import RecipeForm from './components/Admin/RecipeForm/RecipeForm.tsx';
import { getRecipes } from './apis/AdminAPI/RecipeAPI';
import Header from './components/Basics/Header/Header.tsx';

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
            <Route exact path="" element={<Recipes recipes={recipes}/>}/>
            {
              recipes.map((recipe) => (
                  <Route key={recipe.id} exact path={recipe.url_slug} element={<Recipe slug={recipe.url_slug} recipe_id={recipe.id}/>}/>
              ))
            }
            <Route exact path="/recipe-form" element={<RecipeForm/> }/>
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
