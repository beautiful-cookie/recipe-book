import './App.css'; 
import Header from './components/Header/Header';
import Search from './components/Search/Search'; 
import Items from './components/Items/Items'; 
import React, { useReducer, useEffect } from 'react';


const setPagesCount = (count) => {
  let tempArr = []
  let totalPagesCount = Math.ceil(count / 20) 
  for (let i = 1; i<=totalPagesCount; i++) {
    tempArr.push(i)
  } 
  return tempArr 
}

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
        search: action.updateRecipes 
      }
    case 'NEXT_PAGE': 
      return {
        ...state, 
        nextPage: action.nextPageHref 
      } 
    case 'SAVE_PREV_PAGE': 
      return {
        ...state, 
        prevPage: action.prev 
      }
    default: 
      return state; 
  } 
}  


const initialState = {
  search: 'carrot', 
  prevPage: '', 
  nextPage: '', 
  recipesArr: [] 
}

function App() { 

  const [state, dispatch] = useReducer(reducer, initialState) 
  let API = `https://api.edamam.com/api/recipes/v2?type=public&q=${state.search}&app_id=44654729&app_key=441fd11907adb74f6520c07afefa3676`

  useEffect(() => { 
    fetch(API) 
    .then(response => response.json()) 
    .then(recipesJSON => {
      if (recipesJSON.count > 0) { 
        dispatch({
          type: 'SET_RECIPES', 
          recipes: recipesJSON.hits 
        })
        dispatch({
          type: 'NEXT_PAGE', 
          nextPage: recipesJSON._links.next.href 
        })
        console.log(recipesJSON);
      }
    }) 
  }, [state.search, state.nextPage]) 

  const search = (value) => {
    dispatch({
      type: 'SEARCH_RECIPES', 
      updateRecipes: value 
    })
  }

  const changePage = (paginate) => { 
    console.log('test', paginate)
    switch (paginate) {
      case 'next': 
        dispatch({
          type: 'SAVE_PREV_PAGE', 
          prev: API
        }) 
        API = state.nextPage 
        return API 
      case 'prev': 
        API = state.prevPage 
        return API 
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
                <div className='previousPage' onClick={() => {changePage('prev')}}> {'<'} </div>
                <div className='nextPage' onClick={() => {changePage('next')}}> {'>'} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
