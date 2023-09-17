import './RecipeDetailPage.css'
// import IconTag from './../IconTag/IconTag.js';
import Recipe from '../Recipe/Recipe.tsx';
import { useState } from 'react';

export default function RecipeDetailPage({pageState, slug, togglePage}) {

  return (
    <Recipe slug={slug} recipe_id={pageState}/>
  )
}
