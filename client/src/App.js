import logo from './logo.svg';
import { useEffect, useState } from 'react';

import './App.css';
import RecipeBox from './components/RecipeBox/RecipeBox'
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
  
  function togglePage(pageCode) {
    console.log('toggling recipe detail', pageCode)
    setPageState(pageCode)
  }

  function displayBody() {
    if (pageState !== 0) {
      return (
        <RecipeDetailPage pageState={pageState} />
      );
    } else {
      return (
        <div className="App-recipeBoxes">
          {
            recipes.map((recipe) => (
              <RecipeBox togglePage={togglePage} key={recipe.id} recipe={recipe} />
            ))
          }
        </div>
      );
    }
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
