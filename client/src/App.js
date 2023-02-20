import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent/TestComponent';
import RecipeBox from './components/RecipeBox/RecipeBox'

function App() {
  return (
    <div className="App">
      <header>
        Some Header
      </header>
      <TestComponent/>
      <RecipeBox/>
    </div>
  );
}

export default App;
