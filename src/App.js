import './App.css'; 
import Header from './components/Header/Header';
import Search from './components/Search/Search'; 
import Items from './components/Items/Items'; 
import React, { useReducer, useEffect } from 'react';


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RECIPES': 
      return {
        ...state, 
        recipesArr: action.recipes 
      }
    default: 
      return state; 
  } 
} 

const initialState = {
  search: 'carrot', 
  recipesArr: [] 
}

function App() { 

  const [state, dispatch] = useReducer(reducer, initialState) 
  const API = `https://api.edamam.com/api/recipes/v2?type=public&q=${state.search}&app_id=44654729&app_key=441fd11907adb74f6520c07afefa3676`

  useEffect(() => { 
    fetch(API) 
    .then(response => response.json()) 
    .then(recipesJSON => {
      if (recipesJSON.count > 0) { 
        dispatch({
          type: 'SET_RECIPES', 
          recipes: recipesJSON.hits 
        })
        console.log(recipesJSON.hits);
      }
    }) 
  }, []) 

  const {search, recipesArr} = state 

  return (
    <div className="App">
      <div className='recipes-page-wrapper'>
        <Header /> 
        <Search /> 
        <div className='itemsContainer'>
          <div className='itemsDisplayContainer'>
            {
              recipesArr.map((recipe, index) => (
                <Items key={index} recipe={recipe} /> 
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
