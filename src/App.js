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
    case 'SEARCH_RECIPES': 
      return {
        ...state, 
        apiUrl: `${apiUrl}${action.updateRecipes}&app_id=${appId}&app_key=${appKey}`, 
        search: action.updateRecipes 
      }
    case 'SET_NEXT_PAGE':
      return {
        ...state,
        nextPage: action.nextPage
      } 
    case 'SET_PREV_PAGE':
      return {
        ...state,
        prevPage: action.prevPage
      } 
    case 'PAGINATE_NEXT_PAGE':
      return {
        ...state,
        apiUrl: action.nextPage,
        prevPage: action.prevPage,
        nextPage: action.nextPage
      } 
    case 'PAGINATE_PREV_PAGE':
      return {
        ...state,
        apiUrl: action.prevPage,
        prevPage: action.prevPage,
        nextPage: action.nextPage
      } 
    default: 
      return state; 
  } 
}  

const apiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=';
const appId = '44654729';
const appKey = '441fd11907adb74f6520c07afefa3676'; 

const initialState = { 
  search: 'carrot', 
  apiUrl: `${apiUrl}carrot&app_id=${appId}&app_key=${appKey}`,
  recipesArr: [], 
  nextPage: '',
  prevPage: '' 
}


function App() { 

  const [state, dispatch] = useReducer(reducer, initialState) 

  useEffect(() => { 
    fetch(state.apiUrl) 
    .then(response => response.json()) 
    .then(recipesJSON => {
      if (recipesJSON.count > 0) { 
        dispatch({
          type: 'SET_RECIPES', 
          recipes: recipesJSON.hits 
        })
        console.log(recipesJSON);
      }
      if (recipesJSON._links.next) {
        dispatch({
          type: 'SET_NEXT_PAGE',
          nextPage: recipesJSON._links.next.href
        });
      }
      if (recipesJSON._links.prev) {
        dispatch({
          type: 'SET_PREV_PAGE',
          prevPage: recipesJSON._links.prev.href
        }) 
      }
    }) 
  }, [state.apiUrl]) 

const search = (value) => {
  dispatch({
    type: 'SEARCH_RECIPES', 
    updateRecipes: value 
  })
} 

const paginateNextPage = () => {
  if (state.nextPage) {
    dispatch({
      type: 'PAGINATE_NEXT_PAGE',
      prevPage: state.apiUrl,
      nextPage: state.nextPage
    }) 
  }
} 

const paginatePrevPage = () => {
  if (state.prevPage) {
    dispatch({
      type: 'PAGINATE_PREV_PAGE',
      prevPage: state.prevPage,
      nextPage: state.apiUrl
    }) 
  }
} 

const {recipesArr} = state 

  return (
    <div className="App">
      <div className='recipes-page-wrapper'>
        <Header /> 
        <Search search={search} /> 
        <div className='itemsContainer'>
          <div className='itemsDisplayContainer'>
            {
              recipesArr.map((recipe, index) => (
                <Items key={index} item={recipe} /> 
              ))
            }
            <div className='PaginationWrapper'> 
              <div className='pagination'>
                <button className='nextPage' onClick={paginatePrevPage}>{'<'}</button>
                <button className='previousPage' onClick={paginateNextPage}>{'>'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
