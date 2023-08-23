import logo from './logo.svg';
import { useState } from 'react';

import './App.css';
import RecipeBox from './components/RecipeBox/RecipeBox'
import RecipeDetailPage from './components/RecipeDetailPage/RecipeDetailPage'
import TestComponent from './components/TestComponent/TestComponent'
import RecipeForm from './components/Admin/RecipeForm/RecipeForm.tsx';

function App() {
  const [pageState, setPageState] = useState(0)
  // Test List of Recipes
  let recipes = [
    {
      id: 1,
      name: 'Peking Duck',
      img: "https://redhousespice.com/wp-content/uploads/2022/01/sliced-peking-duck-with-pancakes-scaled.jpg"
    },
    {
      id: 2,
      name: 'Fried Rice',
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/0/FNK_Fried-Rice_s4x3.jpg.rend.hgtvcom.616.462.suffix/1594918949644.jpeg"
    },
    {
      id: 3,
      name: 'Lobster Roll',
      img: "https://www.skinnytaste.com/wp-content/uploads/2011/06/Lobster-Rolls-9.jpg"
    },
    {
      id: 4,
      name: 'Sashimi',
      img: "https://resize.img.allw.mn/thumbs/y2/uk/p0htynxj5e8f36e6ad914355468970_951x951.jpg?width=1200&height=1200"
    },
    {
      id: 5,
      name: 'Peking Duck',
      img: "https://redhousespice.com/wp-content/uploads/2022/01/sliced-peking-duck-with-pancakes-scaled.jpg"
    },
    {
      id: 6,
      name: 'Fried Rice',
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/0/FNK_Fried-Rice_s4x3.jpg.rend.hgtvcom.616.462.suffix/1594918949644.jpeg"
    },
    {
      id: 7,
      name: 'Lobster Roll',
      img: "https://www.skinnytaste.com/wp-content/uploads/2011/06/Lobster-Rolls-9.jpg"
    },
    {
      id: 8,
      name: 'Sashimi',
      img: "https://resize.img.allw.mn/thumbs/y2/uk/p0htynxj5e8f36e6ad914355468970_951x951.jpg?width=1200&height=1200"
    }
  ]

  function togglePage(pageCode) {
    console.log('toggling recipe detail')
    setPageState(pageCode)
  }

  const recipeBoxes = recipes.map(recipe => {
    return (
      <RecipeBox togglePage={togglePage} key={recipe.id} recipe={recipe}/>
    )
  })

  function displayBody() {
    if (pageState === 1) {
      return (
        <RecipeDetailPage togglePage={togglePage}/>
      )
    } else {
      return (
        <div className="App-recipeBoxes">
          {recipeBoxes}
        </div>
      )
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        Placeholder Header
      </header>
      <div className="App-main-body">
        {displayBody()}
        <TestComponent/> 
      </div>
      <RecipeForm/>
    </div>
  );
}

export default App;
