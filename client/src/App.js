import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Recipes from './components/Recipes/Recipes.tsx';
import RecipeDetailPage from './components/RecipeDetailPage/RecipeDetailPage'
import RecipeForm from './components/Admin/RecipeForm/RecipeForm.tsx';
import { getRecipes } from './apis/AdminAPI/RecipeAPI';

function App() {
  const [pageState, setPageState] = useState(0);
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
  

  function displayBody() {
    return (
      <div className="App-recipeBoxes">
        <Routes>
          <Route exact path="/" element={<Recipes recipes={recipes}/>}/>
          {
            recipes.map((recipe) => (
                <Route key={recipe.id} exact path={recipe.url_slug} element={<RecipeDetailPage slug={recipe.url_slug} pageState={recipe.id}/>}/>
            ))
          }
        </Routes>
      </div>
    );
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Placeholder Header
      </header>
      <div className="App-main-body">
        {displayBody()}
      </div>
      {/* <RecipeForm/> */}
    </div>
  );
}

export default App;
