import styles from './Search.module.css' 
import React, { useState } from 'react';

const Search = (props) => {
    const [search, setSearch] = useState(""); 

    const setSearchValue = (event) => {
        setSearch(event.target.value) 
    } 
    const searchFunction = (event) => {
        event.preventDefault() 
        props.search(search)
        setSearch("") 
    }

    return (
        <div className={styles.SearchWrapper}> 
            <input placeholder='Поиск...' type="text" value={search} onChange={setSearchValue} className={styles.Search} /> 
            <input type='submit' value='Искать' onClick={searchFunction} className={styles.SearchButton} />
        </div>
    )
} 

export default Search; 