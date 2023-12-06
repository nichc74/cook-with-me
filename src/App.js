import { useEffect, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Basics/Navbar/Navbar.tsx';
import Recipes from './components/Recipes/Recipes.tsx';
import Recipe from './components/Recipe/Recipe.tsx';
import RecipeForm from './components/Admin/RecipeForm/RecipeForm.tsx';
import { getRecipes } from './apis/AdminAPI/RecipeAPI';
import Header from './components/Basics/Header/Header.tsx';
import AdminPage from './components/Admin/AdminPage.tsx';
import PageNotFound from './components/Pages/NotFound/PageNotFound.tsx';
function App() {
  const [recipes, setRecipes] = useState([]);

  const path = '/';

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
      </header>
      <Navbar/>
      <div className="App-main-body">
        <div className="App-recipeBoxes">
          {/* <HashRouter> */}
            <Routes>
              <Route exact path={`${path}admin`} element={<AdminPage/>}/>
              <Route exact path={`${path}admin/recipe-form/create`} element={<RecipeForm/> }/>
              <Route path={`${path}admin/recipe-form/edit/*`} element={<RecipeForm/>} />
              <Route exact path={`${path}/recipes`} element={<Recipes recipes={recipes}/> }/>
              <Route exact path={`${path}/categories`} element={<div>CATEGORY</div> }/>
              <Route exact path={`${path}/entrees`} element={<div>ENTREE</div> }/>
              <Route path={`${path}recipes/:slug/:id`} element={<Recipe/>}/>
              {
                recipes.map((recipe) => (
                  <Route key={recipe.id} path={`${path}recipes${recipe.url_slug}`} element={<Recipe recipe={recipe} recipe_id={recipe.id}/> }/>
                ))
              }
              <Route exact path="/*" element={<PageNotFound/>}/>
            </Routes>
          {/* </HashRouter> */}
        </div>
      </div>
      <footer className="App-footer">
          footer
      </footer>
    </div>
  );
}

export default App;
