import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import recipesReducer from './recipesReducer';

const rootReducer = combineReducers({
    recipeReducer,
    recipesReducer
})

export default rootReducer;