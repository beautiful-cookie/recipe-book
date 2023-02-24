import './App.css'; 
import Header from './components/Header/Header';
import Search from './components/Search/Search'; 
import Items from './components/Items/Items'; 
import React, { useReducer, useEffect } from 'react';


const reducer = (state, action) => {
  switch (action) {
    case '': 
      break; 
    default: 
      return state; 
  } 
} 

const initialState = {
  search: 'морковь' 
}

function App() { 

  const [state, dispatch] = useReducer(reducer, initialState) 
  const API = `https://api.edamam.com/api/recipes/v2?type=public&q=${state.search}&app_id=44654729&app_key=441fd11907adb74f6520c07afefa3676`

  useEffect(() => {
    fetch(API) 
    .then(response => response.json()) 
    .then(recipesJSON => {
      if (recipesJSON.Response === 'True') {
        
      }
    }) 
  }, []) 

  return (
    <div className="App">
      <div className='recipes-page-wrapper'>
        <Header /> 
        <Search /> 
        <Items /> 
      </div>
    </div>
  );
}

export default App;
