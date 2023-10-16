import './RecipeDetailPage.css'
// import IconTag from './../IconTag/IconTag.js';
import Recipe from '../Recipe/Recipe.tsx';
import { useState } from 'react';

export default function RecipeDetailPage({pageState, togglePage}) {
  return (
    <div>
      <Recipe recipe_id={pageState}/>
    </div>
  )
}
